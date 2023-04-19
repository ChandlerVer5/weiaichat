import { Group, rem, Title, ActionIcon } from '@mantine/core';
import React from 'react';
import { IconDots } from '@tabler/icons-react';

type Props = {};

export default function Top({}: Props) {
  return (
    <Group
      p="md"
      sx={(theme) => ({
        // borderTop: `1px ${theme.colors.gray[3]} solid`,
        borderBottom: `1px ${theme.colors.gray[3]} solid`,
      })}
      position="apart"
    >
      <Title order={5}>鸱夷子皮😃ᵇⁱⁿᵍ</Title>
      <ActionIcon>
        <IconDots />
      </ActionIcon>
    </Group>
  );
}
