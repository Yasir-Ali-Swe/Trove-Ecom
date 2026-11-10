import { Text, TextInput, View } from "react-native";

interface CheckoutInputProps {
    label: string;
    value: string;
    onChangeText: (value: string) => void;
    placeholder?: string;
    multiline?: boolean;
    keyboardType?: "default" | "phone-pad" | "email-address";
}

export default function CheckoutInput({
    label,
    value,
    onChangeText,
    placeholder,
    multiline = false,
    keyboardType = "default",
}: CheckoutInputProps) {
    return (
        <View className="mb-5">
            <Text className="text-sm font-semibold text-slate-300 mb-2">
                {label}
            </Text>

            <TextInput
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor="#64748B"
                keyboardType={keyboardType}
                multiline={multiline}
                textAlignVertical={multiline ? "top" : "center"}
                className={`bg-slate-900 border border-slate-800 rounded-md px-4 text-white text-sm ${multiline ? "h-28 py-3" : "h-14"
                    }`}
            />
        </View>
    );
}