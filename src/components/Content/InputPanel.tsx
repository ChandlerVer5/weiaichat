import { Group, ActionIcon, rem } from '@mantine/core';
import {
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
  IconSun,
  IconMoonStars,
} from '@tabler/icons-react';

type Props = {};

export default function InputPanel({}: Props) {
  return (
    <Group position="apart" p="0.2rem 1rem" h={rem(40)}>
      <Group w="auto">
        <ActionIcon>
          <IconHome2 />
        </ActionIcon>
        <ActionIcon>
          <IconGauge />
        </ActionIcon>
        <ActionIcon>
          <IconDeviceDesktopAnalytics />
        </ActionIcon>
      </Group>

      <Group>
        <ActionIcon>
          <IconSun />
        </ActionIcon>
        <ActionIcon>
          <IconFingerprint />
        </ActionIcon>
      </Group>
    </Group>
  );
}
