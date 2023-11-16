'use client'
import Image from 'next/image'
import { Stack, Header, Flex, Box, Footer, Center, Text } from '@mantine/core';
import logo from '../../public/logo.svg'
import { footerText } from '@/utils/constant';
import LogoutButton from '@/components/Logout.button';

const DashboardTwo = ({ children, user }) => {

    return (
        <Stack align="center" justify="space-between" spacing="xl" sx={(theme) => ({ backgroundColor: theme.colors.gray[2], height: '100vh' })}>
            <Header height={{ base: 50, md: 50 }} p="md" w="100%">
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
            <Flex w="100%" h="100%" justify="center" align="center">
                {children}
            </Flex>
            <Footer height={25} w="100%">
                <Center>
                    <Text size="xs" color="gray.6">{footerText}</Text>
                </Center>
            </Footer>
        </Stack>
    )
}

export default DashboardTwo;