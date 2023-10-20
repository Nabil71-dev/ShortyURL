'use client'
import Image from 'next/image'
import { AppShell, Header, Footer, Box, Flex, useMantineTheme, Center, Text } from '@mantine/core';
import logo from '../../public/logo.svg'
import { footerText } from '@/utils/constant';
import LogoutButton from '@/components/Logout.button';

const DashboardTwo = ({ children,user }) => {
    const theme = useMantineTheme();
    return (
        <AppShell
            styles={{
                main: {
                    background: theme.colors.gray[1],
                },
            }}
            header={
                <Header height={{ base: 50, md: 50 }} p="md">
                    <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                        <Flex align="center" justify="space-between" sx={{ width: "100%" }}>
                            <Box>
                                <Image src={logo} alt="ShortyURL" />
                            </Box>
                            <Box>
                                {
                                    user && <LogoutButton />
                                }
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
            <Flex h="100%" justify="center" align="center">
                {children}
            </Flex>
        </AppShell>
    )
}

export default DashboardTwo;