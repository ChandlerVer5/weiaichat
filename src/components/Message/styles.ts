import { createStyles, rem } from '@mantine/core';
import type { MessageProps } from './types';

export const useStyles = ({ type, user }: MessageProps) =>
    createStyles((theme) => {
        const isResponse = user?.type === 'AI';
        const hasArrow = type === 'text';
        const isImageType = type === 'image';
        const color = isImageType ? "transparent" : isResponse ? '#fff' : '#95ec69';

        return {
            // TODO Group Chat
            wrapper: {
                flexDirection: isResponse ? 'row' : 'row-reverse',
            },
            avatar: {},
            message: {
                position: 'relative',
                padding: isImageType ? 0 : `${rem(8)}  ${rem(10)}`,
                backgroundColor: color,
                borderRadius: rem(4),
                // message width
                maxWidth: `calc(100% / 2 + ${rem(100)})`,
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    transform: `rotateZ(${isResponse ? 0 : -13}deg) rotateY(${isResponse ? 0 : 180
                        }deg)`,
                    borderBottomLeftRadius: rem(10),
                    [isResponse ? 'left' : 'right']: `${rem(-10)}`,
                    top: `${rem(8)}`,
                    border: hasArrow ? `${rem(8)} ${color} solid` : 'none',
                    borderTopColor: 'transparent',
                    borderLeftColor: 'transparent',
                },
            },
            text: {
                "& pre": {
                    overflowX: "auto",
                },
                "& hr": {
                    height: 0,
                    borderStyle: "dashed",
                    width: "40%",
                    margin: rem(8)
                }
            },
        };
    });