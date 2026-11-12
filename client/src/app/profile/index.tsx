import { useState, type ReactNode } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { router } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import ProfileAvatar from "@/components/profile/ProfileAvatar";
import FormField from "@/components/profile/FormField";
import { useKeyboardHeight } from "@/hooks/useKeyboardHeight";
import { useTheme, radius } from "@/theme";

const FIELD_GAP = 16;
const SECTION_GAP = 32;

const INITIAL_FORM = {
  fullName: "",
  phone: "",
  country: "",
  state: "",
  city: "",
  address: "",
};

type FormKey = keyof typeof INITIAL_FORM;
type FormErrors = Partial<Record<FormKey, string>>;

function Section({ title, children }: { title: string; children: ReactNode }) {
  const { colors } = useTheme();
  return (
    <View style={{ marginTop: SECTION_GAP }}>
      <Text
        style={{
          color: colors.foreground.DEFAULT,
          fontSize: 16,
          fontWeight: "700",
          letterSpacing: -0.2,
        }}
      >
        {title}
      </Text>
      <View
        style={{
          height: 1,
          backgroundColor: colors.border.DEFAULT,
          marginTop: 12,
          marginBottom: 4,
        }}
      />
      {children}
    </View>
  );
}

export default function ProfileScreen() {
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();
  const keyboardHeight = useKeyboardHeight();

  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSaving, setIsSaving] = useState(false);

  const setField = (key: FormKey) => (value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = () => {
    const next: FormErrors = {};
    const phoneDigits = form.phone.replace(/\D/g, "");

    if (form.fullName.trim().length < 2) next.fullName = "Enter your full name";
    if (phoneDigits.length < 10 || phoneDigits.length > 15)
      next.phone = "Enter a valid phone number";
    if (!form.country.trim()) next.country = "Country is required";
    if (!form.city.trim()) next.city = "City is required";
    if (form.address.trim().length < 10) next.address = "Enter your full address";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSave = async () => {
    if (!validate() || isSaving) return;

    setIsSaving(true);
    try {
      // TODO: replace with your API call or store dispatch.
      // Upload `photoUri` (a local file URI) along with the form values.
      await new Promise((resolve) => setTimeout(resolve, 700));
      router.back();
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      {/* Shrinks the whole screen by the keyboard height */}
      <View style={{ flex: 1, paddingBottom: keyboardHeight }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="on-drag"
          contentContainerStyle={{
            paddingHorizontal: 16,
            paddingTop: 16,
            paddingBottom: 32,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <ProfileAvatar uri={photoUri} onChange={setPhotoUri} />
            <Text
              style={{
                color: colors.muted.foreground,
                fontSize: 12,
                marginTop: 12,
              }}
            >
              Tap to change your photo
            </Text>
          </View>

          <Section title="Basic Detail">
            <View style={{ marginTop: FIELD_GAP }}>
              <FormField
                label="Full name"
                placeholder="Enter your full name"
                value={form.fullName}
                onChangeText={setField("fullName")}
                error={errors.fullName}
                autoCapitalize="words"
                autoComplete="name"
                textContentType="name"
                returnKeyType="next"
              />
            </View>
          </Section>

          <Section title="Contact Detail">
            <View style={{ marginTop: FIELD_GAP }}>
              <FormField
                label="Mobile number"
                placeholder="+92 300 1234567"
                value={form.phone}
                onChangeText={setField("phone")}
                error={errors.phone}
                keyboardType="phone-pad"
                autoComplete="tel"
                textContentType="telephoneNumber"
              />
            </View>
          </Section>

          <Section title="Location">
            <View style={{ marginTop: FIELD_GAP }}>
              <FormField
                label="Country"
                placeholder="Country"
                value={form.country}
                onChangeText={setField("country")}
                error={errors.country}
                autoCapitalize="words"
              />
            </View>

            <View style={{ flexDirection: "row", marginTop: FIELD_GAP }}>
              <View style={{ flex: 1, marginRight: 12 }}>
                <FormField
                  label="State / Province"
                  placeholder="State"
                  value={form.state}
                  onChangeText={setField("state")}
                  error={errors.state}
                  autoCapitalize="words"
                />
              </View>
              <View style={{ flex: 1 }}>
                <FormField
                  label="City"
                  placeholder="City"
                  value={form.city}
                  onChangeText={setField("city")}
                  error={errors.city}
                  autoCapitalize="words"
                />
              </View>
            </View>

            <View style={{ marginTop: FIELD_GAP }}>
              <FormField
                label="Address"
                placeholder="House no, street, area"
                value={form.address}
                onChangeText={setField("address")}
                error={errors.address}
                multiline
                numberOfLines={4}
                autoComplete="street-address"
                textContentType="fullStreetAddress"
              />
            </View>
          </Section>
        </ScrollView>

        {/* Sticky save bar */}
        <View
          style={{
            paddingHorizontal: 16,
            paddingTop: 12,
            paddingBottom: keyboardHeight > 0 ? 12 : Math.max(insets.bottom, 12),
            borderTopWidth: 1,
            borderTopColor: colors.border.DEFAULT,
            backgroundColor: colors.background,
          }}
        >
          <Pressable
            onPress={handleSave}
            disabled={isSaving}
            accessibilityRole="button"
            accessibilityLabel="Save profile"
            accessibilityState={{ disabled: isSaving, busy: isSaving }}
            style={({ pressed }) => ({
              height: 52,
              borderRadius: radius.md,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: pressed
                ? colors.primary.dark
                : colors.primary.DEFAULT,
              opacity: isSaving ? 0.7 : 1,
            })}
          >
            {isSaving ? (
              <ActivityIndicator color={colors.primary.foreground} />
            ) : (
              <Text
                style={{
                  color: colors.primary.foreground,
                  fontSize: 15,
                  fontWeight: "700",
                  letterSpacing: 0.3,
                }}
              >
                Save
              </Text>
            )}
          </Pressable>
        </View>
      </View>
    </View>
  );
}