import { useCallback, useRef } from "react";
import { View, FlatList, Pressable, useWindowDimensions } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  Extrapolation,
  runOnJS,
  type SharedValue,
} from "react-native-reanimated";
import { router, useFocusEffect } from "expo-router";

import HeroSlide from "./HeroSlide";
import { HERO_SLIDES } from "@/constants/banners";
import type { HeroSlideItem, HeroSliderProps } from "@/types/banner";

function PaginationDot({
  index,
  width,
  scrollX,
  onPress,
}: {
  index: number;
  width: number;
  scrollX: SharedValue<number>;
  onPress: () => void;
}) {
  const style = useAnimatedStyle(() => {
    const range = [(index - 1) * width, index * width, (index + 1) * width];
    return {
      width: interpolate(scrollX.value, range, [6, 24, 6], Extrapolation.CLAMP),
      opacity: interpolate(scrollX.value, range, [0.35, 1, 0.35], Extrapolation.CLAMP),
    };
  });

  return (
    <Pressable
      onPress={onPress}
      hitSlop={8}
      accessibilityRole="button"
      accessibilityLabel={`Go to slide ${index + 1}`}
    >
      <Animated.View style={style} className="h-1.5 rounded-full bg-primary" />
    </Pressable>
  );
}

export default function HeroSlider({
  slides = HERO_SLIDES,
  autoPlayInterval = 4500,
}: HeroSliderProps) {
  const { width } = useWindowDimensions();
  const listRef = useRef<FlatList<HeroSlideItem>>(null);
  const indexRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const scrollX = useSharedValue(0);

  const goTo = useCallback(
    (index: number) => {
      indexRef.current = index;
      listRef.current?.scrollToOffset({ offset: index * width, animated: true });
    },
    [width]
  );

  const stopAutoplay = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startAutoplay = useCallback(() => {
    stopAutoplay();
    if (slides.length < 2) return;
    timerRef.current = setInterval(() => {
      goTo((indexRef.current + 1) % slides.length);
    }, autoPlayInterval);
  }, [autoPlayInterval, goTo, slides.length, stopAutoplay]);

  // Run autoplay only while this screen is focused
  useFocusEffect(
    useCallback(() => {
      startAutoplay();
      return stopAutoplay;
    }, [startAutoplay, stopAutoplay])
  );

  const syncIndex = useCallback(
    (x: number) => {
      indexRef.current = Math.min(
        Math.max(Math.round(x / width), 0),
        slides.length - 1
      );
    },
    [width, slides.length]
  );

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      scrollX.value = e.contentOffset.x;
    },
    onBeginDrag: () => {
      runOnJS(stopAutoplay)();
    },
    onEndDrag: () => {
      runOnJS(startAutoplay)();
    },
    onMomentumEnd: (e) => {
      runOnJS(syncIndex)(e.contentOffset.x);
    },
  });

  const handlePressSlide = useCallback((slide: HeroSlideItem) => {
    router.push(
      slide.category
        ? { pathname: "/products", params: { category: slide.category } }
        : "/products"
    );
  }, []);

  const renderItem = useCallback(
    ({ item }: { item: HeroSlideItem }) => (
      <HeroSlide slide={item} width={width} onPress={() => handlePressSlide(item)} />
    ),
    [width, handlePressSlide]
  );

  return (
    <View className="mb-4">
      <Animated.FlatList
        ref={listRef}
        data={slides}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        getItemLayout={(_, i) => ({ length: width, offset: width * i, index: i })}
        initialNumToRender={1}
        maxToRenderPerBatch={2}
        windowSize={3}
        removeClippedSubviews
      />

      {slides.length > 1 && (
        <View className="flex-row items-center justify-center gap-1.5 mt-3">
          {slides.map((slide, index) => (
            <PaginationDot
              key={slide.id}
              index={index}
              width={width}
              scrollX={scrollX}
              onPress={() => {
                goTo(index);
                startAutoplay();
              }}
            />
          ))}
        </View>
      )}
    </View>
  );
}