import { Avatar, Group, rem, Stack } from '@mantine/core';
import { useStyles } from './styles';
import TextMessage from './Text';
import SystemMessage from './System';
import ImageMessage from './Image';
import UserAvatar from './Avatar';
import CardMessage from './Card';
import type { MessageProps } from './types';

export default function Chat(props: MessageProps) {
  const { classes } = useStyles(props)();
  const { type, content, user } = props;

  return (
    <>
      {content ? (
        <Group align="start" m={rem(20)} className={classes.wrapper}>
          <Avatar className={classes.avatar} src={user?.avatar} />
          <Stack className={classes.message}>
            {type === 'system' ? (
              <SystemMessage />
            ) : type === 'text' ? (
              <TextMessage {...props} />
            ) : type === 'image' ? (
              <ImageMessage {...props} />
            ) : (
              <CardMessage />
            )}
          </Stack>
        </Group>
      ) : null}
    </>
  );
}
