import type { MantineTheme } from "@mantine/core";

export const getCommonStyles = (theme: MantineTheme) => ({
    backgroundColor:
        theme.colorScheme === 'dark' ? theme.colors.dark[8] : '#f3f3f3',
});