import React from 'react';
import { ActionIcon, Group, TextInput, Tooltip, rem } from '@mantine/core';
import { IconPlus, IconSearch } from '@tabler/icons-react';

type Props = {};

export default function TopSearch({}: Props) {
  return (
    <Group
      p={rem(16)}
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === 'dark' ? theme.colors.dark[8] : '#fff',
      })}
    >
      <TextInput
        placeholder="搜索"
        size="xs"
        icon={<IconSearch size="0.8rem" stroke={1.5} />}
        rightSectionWidth={70}
        styles={{
          input: {
            backgroundColor: '#eaeaea',
            border: 'none',
          },
          rightSection: {
            pointerEvents: 'none',
          },
        }}
      />
      <Tooltip label="搜索好友" withArrow position="right">
        <ActionIcon
          variant="default"
          size={rem(30)}
          style={{ backgroundColor: '#eaeaea', border: 'none' }}
        >
          <IconPlus size="0.8rem" stroke={1.5} color="#727272" />
        </ActionIcon>
      </Tooltip>
    </Group>
  );
}
