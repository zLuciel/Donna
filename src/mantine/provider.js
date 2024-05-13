"use client";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import { Notifications } from "@mantine/notifications";

export function Providers({ children }) {
  return (
    <MantineProvider forceColorScheme="light" theme="light" withNormalizeCSS>
      <Notifications />
      {children}
    </MantineProvider>
  );
}
