import { useState, useEffect, useRef, useCallback } from "react";
import { View, FlatList, Keyboard, TouchableWithoutFeedback } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import SearchInput from "@/components/search/SearchInput";
import SearchSuggestionItem from "@/components/search/SearchSuggestionItem";
import SearchEmptyState from "@/components/search/SearchEmptyState";
import { searchProducts } from "@/utils/search";
import type { ProductSearchSuggestion } from "@/types/product";

export default function SearchScreen() {
  const insets = useSafeAreaInsets();
  const params = useLocalSearchParams<{ initialQuery?: string }>();
  const [query, setQuery] = useState(params.initialQuery || "");
  const [suggestions, setSuggestions] = useState<ProductSearchSuggestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const debounceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Debounce search by 280ms
  const executeSearch = useCallback((searchTerm: string) => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    if (!searchTerm.trim()) {
      setSuggestions([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    debounceTimerRef.current = setTimeout(async () => {
      try {
        const results = await searchProducts(searchTerm);
        setSuggestions(results);
      } finally {
        setIsLoading(false);
      }
    }, 280);
  }, []);

  const handleChangeText = (text: string) => {
    setQuery(text);
    executeSearch(text);
  };

  const handleClear = () => {
    setQuery("");
    setSuggestions([]);
    setIsLoading(false);
  };

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/(tabs)");
    }
  };

  const handleSelectSuggestion = (item: ProductSearchSuggestion) => {
    Keyboard.dismiss();
    router.push({
      pathname: "/products/[id]",
      params: { id: item.id },
    });
  };

  const handleSelectSuggestedKeyword = (keyword: string) => {
    setQuery(keyword);
    executeSearch(keyword);
  };

  useEffect(() => {
    let isCancelled = false;
    const initial = params.initialQuery?.trim();
    if (initial) {
      void searchProducts(initial).then((results) => {
        if (!isCancelled) {
          setSuggestions(results);
        }
      });
    }
    return () => {
      isCancelled = true;
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [params.initialQuery]);

  return (
    <View style={{ paddingTop: insets.top }} className="flex-1 bg-background">
      <SearchInput
        value={query}
        onChangeText={handleChangeText}
        onClear={handleClear}
        onBack={handleBack}
        isLoading={isLoading}
      />

      {query.trim().length === 0 || (suggestions.length === 0 && !isLoading) ? (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View className="flex-1">
            <SearchEmptyState
              query={query}
              onSuggestionPress={handleSelectSuggestedKeyword}
            />
          </View>
        </TouchableWithoutFeedback>
      ) : (
        <FlatList
          data={suggestions}
          keyExtractor={(item) => item.id}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: insets.bottom + 20,
          }}
          renderItem={({ item }) => (
            <SearchSuggestionItem
              item={item}
              onPress={handleSelectSuggestion}
            />
          )}
        />
      )}
    </View>
  );
}
