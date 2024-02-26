"use client";
import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';

export function Providers({ children }) {

  return (
      <MantineProvider withNormalizeCSS>
        {children}
      </MantineProvider>
  );
}