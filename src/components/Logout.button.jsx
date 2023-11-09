'use client'
import { Logout } from '@/utils/auth.service';
import { Text } from '@mantine/core';
import { IconLogout } from '@tabler/icons-react';
import { useRouter } from 'next/navigation'

const LogoutButton = () => {
    const router = useRouter()
    const LogOut = () => {
        Logout()
        router.push('/')
    }

    return (
        <button onClick={LogOut} type="button" className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-bold rounded-lg text-sm px-4 py-1.5 text-center inline-flex items-center">
            <Text mr={5}>Logout</Text>
            <IconLogout />
        </button>
    );
}

export default LogoutButton;