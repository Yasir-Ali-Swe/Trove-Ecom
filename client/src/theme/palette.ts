import type { ThemeColors } from "./colors";

type Widen<T> = T extends string ? string : { [K in keyof T]: Widen<T[K]> };

// Same shape as your dark `colors`, but with plain string values
export type Palette = Widen<ThemeColors>;