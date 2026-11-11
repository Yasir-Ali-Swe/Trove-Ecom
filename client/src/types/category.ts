import type { LucideIcon } from "lucide-react-native";

export interface Category {
  id: string;
  name: string;
  icon: LucideIcon;
  itemCount?: string;
  image?: string;
  slug?: string;
  count?: number;
}

export interface CategoryCardProps {
  name: string;
  icon: LucideIcon;
  itemCount?: string;
  onPress: () => void;
}
