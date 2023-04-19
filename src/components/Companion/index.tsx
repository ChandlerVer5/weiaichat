import { Stack, rem, createStyles, ScrollArea } from '@mantine/core';
import type { MantineTheme } from '@mantine/core';
import Pal from './Pal';
import TopSearch from './TopSearch';

type Props = {};

const getCommonStyles = (theme: MantineTheme) => ({
  backgroundColor:
    theme.colorScheme === 'dark' ? theme.colors.dark[8] : '#ebebeb',
});

const useStyles = createStyles((theme: MantineTheme) => ({
  palContainer: {
    height: '100%',
    ...getCommonStyles(theme),
  },
}));

export default function index(props: Props) {
  const { classes } = useStyles();
  return (
    <Stack
      spacing="0"
      w="16.4rem"
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[8]
            : theme.colors.white,
        borderRight: `1px solid ${theme.colors.gray[3]}`,
      })}
    >
      <TopSearch />
      {/* 62 from TopSearch */}
      <ScrollArea h={`calc(100% - ${rem(62)})`} sx={getCommonStyles}>
        <div className={classes.palContainer}>
          {[1, 1, 1, 1, 1, 1, 1].map((v, i) => (
            <Pal key={i} palKey={i} />
          ))}
        </div>
      </ScrollArea>
    </Stack>
  );
}
