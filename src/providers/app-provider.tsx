import type { ReactNode } from "react";

import buildProvidersTree from "./build-provider-tree";

import { AppDataProvider } from "./app-data-provider";
import { ThemeProvider } from "./theme-provider";

interface ProvidersWrapperProps {
  children: ReactNode;
}

export function AppProvider({ children }: ProvidersWrapperProps) {
  const ProvidersTree = buildProvidersTree([
    [AppDataProvider],
    [ThemeProvider],
  ]);

  return <ProvidersTree>{children}</ProvidersTree>;
}
