import type { Palette } from "./palette"

export const lightColors: Palette = {
    background: "#F8FAFC",
    foreground: { DEFAULT: "#0F172A", muted: "#475569" },
    surface: { DEFAULT: "#FFFFFF", elevated: "#F1F5F9", muted: "#E2E8F0" },
    card: { DEFAULT: "#FFFFFF", foreground: "#0F172A" },
    primary: {
        DEFAULT: "#F97316",
        foreground: "#FFFFFF",
        light: "#FB923C",
        dark: "#EA580C",
    },
    secondary: { DEFAULT: "#F1F5F9", foreground: "#0F172A" },
    muted: { DEFAULT: "#F1F5F9", foreground: "#64748B", subtle: "#94A3B8" },
    border: { DEFAULT: "#E2E8F0", subtle: "#E2E8F0", strong: "#CBD5E1" },
    input: "#F1F5F9",
    ring: "#F97316",
    success: { DEFAULT: "#22C55E", foreground: "#FFFFFF" },
    warning: { DEFAULT: "#F59E0B", foreground: "#020617", star: "#FBBF24" },
    destructive: { DEFAULT: "#EF4444", foreground: "#FFFFFF" },
    info: { DEFAULT: "#3B82F6", foreground: "#FFFFFF" },
};