import { Stack, Image, Avatar } from '@mantine/core';
import { useStyles } from './styles';
import type { MessageProps } from './types';

export default function ImageMessage(props: MessageProps) {
  const { classes } = useStyles(props)();
  const { content } = props;

  return <Image maw={'90%'} radius="md" src={content.picUrl} />;
}
