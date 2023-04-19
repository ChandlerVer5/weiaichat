import { Stack, Textarea, rem, useMantineTheme, Divider } from '@mantine/core';
import { useElementSize } from '@mantine/hooks';
import { getCommonStyles } from './common';
import InputPanel from './InputPanel';

type Props = {};

export default function ButtomInput({}: Props) {
  const theme = useMantineTheme();
  const { ref: InputRef, height } = useElementSize();

  return (
    <Stack ref={InputRef} sx={(theme) => ({ ...getCommonStyles(theme) })}>
      <Divider
        w="100%"
        color={theme.colors.gray[3]}
        sx={(_theme) => ({
          cursor: 'row-resize',
        })}
      />
      <InputPanel />
      <Textarea
        maxRows={10}
        autoFocus
        autosize
        styles={{
          input: {
            // border: 'none',
            backgroundColor: 'transparent',
            height: 1,
          },
        }}
      />
    </Stack>
  );
}
