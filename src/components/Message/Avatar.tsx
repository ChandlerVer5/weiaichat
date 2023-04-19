import { Avatar } from '@mantine/core';
import type { MessageProps } from './types';

export default function UserAvatar({ user }: MessageProps) {
  return <Avatar className={classes.avatar} src={user?.avatar} />;
}
