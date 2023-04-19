import {
  Center,
  createStyles,
  Navbar,
  rem,
  Stack,
  Tooltip,
  useMantineColorScheme,
  ActionIcon,
  Avatar,
} from '@mantine/core';
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

const useStyles = createStyles((theme) => ({
  link: {
    width: rem(50),
    height: rem(50),
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#333',
    opacity: 0.85,

    '&:hover': {
      opacity: 1,
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
          .background!,
        0.1
      ),
    },
  },

  active: {
    opacity: 1,
    '&, &:hover': {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
          .background!,
        0.15
      ),
    },
  },
}));

interface NavbarLinkProps {
  icon: React.FC<any>;
  label: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  const { classes, cx } = useStyles();
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <ActionIcon
        onClick={onClick}
        className={cx(classes.link, { [classes.active]: active })}
      >
        <Icon size="1.2rem" stroke={1.5} />
      </ActionIcon>
    </Tooltip>
  );
}

const navIcons = [
  { icon: IconHome2, label: 'Home' },
  { icon: IconDeviceDesktopAnalytics, label: 'Analytics' },
  { icon: IconCalendarStats, label: 'Releases' },
  { icon: IconUser, label: 'Account' },
  { icon: IconFingerprint, label: 'Security' },
];

export default function NavSide({}: Props) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const NavActions = navIcons.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      // active={index === active}
      // onClick={() => setActive(index)}
    />
  ));

  return (
    <Navbar
      width={{ base: 'auto' }}
      p={'0.2rem'}
      sx={() => ({
        backgroundColor: '#cbcbcb',
        position: 'static',
      })}
    >
      <Center mt={74}>
        <Avatar
          src="https://www.topthink.com/uploads/avatar/20221204/2b25dd261d384a33024b6dac9e327bf2.png"
          alt="王亚辉"
        />
      </Center>
      <Navbar.Section grow mt={30} sx={{ overflow: 'auto' }}>
        <Stack justify="center" spacing="0">
          {NavActions}
        </Stack>
      </Navbar.Section>
      <Navbar.Section>
        <Stack justify="center" spacing="0">
          {/* 主题切换 */}
          <NavbarLink
            icon={colorScheme === 'dark' ? IconSun : IconMoonStars}
            label="change theme"
            onClick={() => toggleColorScheme()}
          />
          <NavbarLink icon={IconSettings} label="Settings" />
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
}
