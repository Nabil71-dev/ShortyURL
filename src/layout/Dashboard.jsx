"use client";

import Image from 'next/image'
import { useState } from 'react';
import { Text,AppShell, Navbar, Header, MediaQuery, Burger, Box, useMantineTheme, Flex, createStyles, ScrollArea, Footer, Center } from '@mantine/core';
import logo from '../../public/logo.svg'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LogoutCard from '@/components/Logout.card';
import { footerText } from '@/utils/constant';

const useStyles = createStyles((theme) => ({
    link: {
        display: 'block',
        lineHeight: 1.75,
        padding: `8px 8px`,
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.colors.gray[7],
        fontSize: theme.fontSizes.md,
        fontWeight: 600,
        '&:hover': {
            backgroundColor: theme.colors.gray[0],
        },
        [theme.fn.smallerThan('md')]: {
            // borderRadius: 0,
            padding: theme.spacing.md,
        },
    },

    linkActive: {
        padding: `8px 8px`,
        color: theme.colors.green[7],
        textDecoration: 'none',
        fontWeight: 600,
        fontSize: theme.fontSizes.md,
        borderRadius: '8px',
        backgroundColor: theme.colors.gray[2]
        ,[theme.fn.smallerThan('md')]: {
            // borderRadius: 0,
            padding: theme.spacing.md,
        },
    },
}));

const Dashboard = ({ children, links }) => {
    const path = usePathname();
    const { classes } = useStyles();
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    const items = links.map((link) => (
        <Link
            key={link.label}
            href={link.link}
            className={(path == link.link ? classes.linkActive : classes.link)}
            style={{ display: 'flex', alignItems: 'center' }}
            onClick={() => setOpened((o) => !o)}
        >
            {link?.icon} {link.label}
        </Link>
    ));

    return (
        <AppShell
            styles={{
                main: {
                    background: theme.colors.gray[1],
                },
            }}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            navbar={
                <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 250, lg: 240 }}>
                    <Navbar.Section grow mt="md" component={ScrollArea} >
                        {items}
                    </Navbar.Section>
                    <Navbar.Section mx="auto">
                        <LogoutCard />
                    </Navbar.Section>
                </Navbar>
            }
            header={
                <Header height={{ base: 50, md: 50 }} p="md">
                    <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                            <Burger
                                opened={opened}
                                onClick={() => setOpened((o) => !o)}
                                size="sm"
                                color={theme.colors.gray[6]}
                                mr="sm"
                            />
                        </MediaQuery>
                        <Flex align="center" justify="space-between" sx={{ width: "100%" }}>
                            <Box>
                                <Image src={logo} alt="ShortyURL" />
                            </Box>
                        </Flex>
                    </div>
                </Header>
            }
            footer={
                <Footer height={25}>
                    <Center>
                        <Text size="xs" color="gray.6">{footerText}</Text>
                    </Center>
                </Footer>
            }
        >
            <Flex justify="center" align="center">
                {children}
            </Flex>
        </AppShell>
    );
}
export default Dashboard;