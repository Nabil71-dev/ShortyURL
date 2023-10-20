'use client'
import { Text } from '@mantine/core';
import { IconLogout } from '@tabler/icons-react';
// import { LogoutMethod } from '../../../service/auth.service';
// import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
    // const Navigate=useNavigate()
    const LogOut = () => {
        // LogoutMethod();
        // Navigate('/login', {
        //     replace: true
        // })
    }

    return (
        <button onClick={LogOut} type="button" className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-bold rounded-lg text-sm px-4 py-1.5 text-center inline-flex items-center">
            <Text mr={5}>Logout</Text>
            <IconLogout />
        </button>
    );
}

export default LogoutButton;