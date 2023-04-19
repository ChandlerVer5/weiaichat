import { useState } from 'react';

import { MantineProvider, ColorSchemeProvider, rem } from '@mantine/core';
import type { MantineThemeOverride, ColorScheme } from '@mantine/core';

export const theme: MantineThemeOverride = {
  colorScheme: 'dark',
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          globalStyles: (theme) => ({
            body: {
              ...theme.fn.fontStyles(),
              backgroundColor:
                theme.colorScheme === 'dark' ? theme.colors.dark[7] : '#ddd',
              // : theme.white,
              color:
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[0]
                  : theme.black,
              lineHeight: theme.lineHeight,
            },
          }),
        }}
      >
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
