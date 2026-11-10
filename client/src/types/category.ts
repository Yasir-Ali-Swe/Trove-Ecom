import type { LucideIcon } from "lucide-react-native";

export interface Category {
    id: string;
    name: string;
    icon: LucideIcon;
}

export interface CategoryCardProps {
    name: string;
    icon: LucideIcon;
    onPress: () => void;
}