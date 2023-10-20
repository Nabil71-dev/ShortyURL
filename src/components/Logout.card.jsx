import React from 'react';
import { IconLogout } from '@tabler/icons-react';
import { UnstyledButton, Group, Badge, Text, Box, useMantineTheme, rem } from '@mantine/core';
// import { useProfile } from '../../../utils/context/AuthProvider';
// import { LogoutMethod } from '../../../service/auth.service';
// import { useNavigate } from 'react-router-dom';

const LogoutCard = ({ type }) => {
    // const { state } = useProfile();
    // const { loading, error, data } = state;
    const theme = useMantineTheme();

    // const Navigate = useNavigate()
    // const LogOut = () => {
    //     LogoutMethod();
    //     Navigate('/login', {
    //         replace: true
    //     })
    // }

    return (
        <Box
            sx={{
                borderTop: `2px solid ${theme.colors.gray[2]}`,
            }}
        >
            <UnstyledButton
                sx={{
                    display: 'block',
                    width: '100%',
                    padding: theme.spacing.xs,
                    borderRadius: theme.radius.sm,
                    color: theme.black,
                }}
            >
                <Group>
                    <Box sx={{ flex: 1 }}>
                        <Box w={130}>
                        <Text truncate size="sm" weight={500}>email</Text>
                            {
                                // !loading && error=="" && data && <Text truncate size="sm" weight={500}>{data?.email}</Text>
                            }
                        </Box>
                        <Badge sx={(theme) => ({
                            backgroundColor: theme.colors.gray[1],
                            color: theme.colors.green[7]
                        })} >type</Badge>
                    </Box>
                    <Text mt="sm" title="Logout" ><IconLogout color="gray" size="1.5rem" stroke={2.25}/></Text>
                </Group>
            </UnstyledButton>
        </Box>
    );
}

export default LogoutCard;