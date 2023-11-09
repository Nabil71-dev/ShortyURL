import { useEffect } from 'react';
import { IconLogout } from '@tabler/icons-react';
import { UnstyledButton, Group, Badge, Text, Box, useMantineTheme} from '@mantine/core';
import { useSelector, useDispatch } from 'react-redux';
import { getProfile,reset } from '@/services/user.slice';
import { useRouter } from 'next/navigation'
import { Logout } from '@/utils/auth.service';

const LogoutCard = () => {
    const theme = useMantineTheme();
    const router = useRouter()
    const { loading, error, profile } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProfile())

        return () => dispatch(reset());
    }, [dispatch])

    const logOut = () => {
        Logout();
        router.push('/')
    }

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
                        <Text truncate size="sm" weight={500}>{profile?.data?.email}</Text>
                        </Box>
                        <Badge sx={(theme) => ({
                            backgroundColor: theme.colors.gray[1],
                            color: theme.colors.green[7]
                        })} >Admin</Badge>
                    </Box>
                    <Text mt="sm" title="Logout" onClick={logOut}><IconLogout color="gray" size="1.5rem" stroke={2.25}/></Text>
                </Group>
            </UnstyledButton>
        </Box>
    );
}

export default LogoutCard;