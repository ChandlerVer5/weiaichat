import { useState } from 'react';
import {
  AppShell,
  useMantineTheme,
  Flex,
  Container,
  Center,
} from '@mantine/core';

import Context from '@/components/Content';
import Companion from '@/components/Companion/';
import NavSide from '@/components/NavSide/';

export default function AppShellDemo() {
  const theme = useMantineTheme();

  return (
    <Container fluid p="2rem" h="100vh">
      <AppShell
        layout="alt"
        styles={{
          main: {
            background:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
            padding: 0,
            minHeight: 'auto',
          },
          root: {
            height: '100%',
          },
          body: {
            height: '100%',
          },
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        navbar={
          <Flex>
            <NavSide />
            <Companion />
          </Flex>
        }
      >
        <Context />
      </AppShell>
    </Container>
  );
}
