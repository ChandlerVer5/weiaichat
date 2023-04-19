import { Group, Avatar, Text, Stack, rem, Indicator } from '@mantine/core';
import { useRef, useState } from 'react';
import type { MouseEventHandler } from 'react';

type Props = { palKey: number };

export default function Pal({ palKey }: Props) {
  // const initialActive = useRef(0);
  const [active, setActive] = useState(0);
  const clickPal: MouseEventHandler<HTMLDivElement> = (e) => {
    console.log(active, palKey);
    setActive(palKey);
  };

  return (
    <Group
      py={rem(14)}
      px={rem(12)}
      onClick={clickPal}
      className={active === palKey ? 'active' : ''}
    >
      {/* <Indicator size={6}> */}
      <Avatar
        src="https://www.topthink.com/uploads/avatar/20221204/2b25dd261d384a33024b6dac9e327bf2.png"
        alt="王亚辉"
      />
      {/* </Indicator> */}
      <Stack spacing="0" w="11rem">
        <Group spacing="0" position="apart">
          <Text size="sm">王亚辉</Text>
          <Text size="xs" color="dimmed">
            20:21
          </Text>
        </Group>
        <Group w="11.2rem">
          <Text size="sm" truncate>
            项目地址: https://github.com/liou666/polyglot
          </Text>
        </Group>
      </Stack>
    </Group>
  );
}
