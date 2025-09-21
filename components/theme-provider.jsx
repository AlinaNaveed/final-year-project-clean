"use client";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// Named export so you can `import { ThemeProvider } from "@/components/theme-provider"`
export function ThemeProvider({ children, ...props }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
