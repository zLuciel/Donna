"use client";
import { MantineProvider } from "@mantine/core";


export function Providers({ children }) {

  return (
      <MantineProvider withNormalizeCSS>
        {children}
      </MantineProvider>
  );
}