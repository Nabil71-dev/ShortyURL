'use client'
import { Group, Text } from '@mantine/core';
import { NotificationShow } from './NotificationShow';

export const ConfirmModal = ({ text, confirm, close }) => {
    const onCancel = () => {
        NotificationShow({ title: 'Canceled', message: '', color: 'blue' });
        close()
    }
 
    const onConfirm=()=>{
        confirm();
        close()
    }

    return (
        <>
            <Text size="xl" fw={600}>Are you sure !</Text>
            <Text mb="xl">{text}</Text>
            <Group position="right">
                <button className="bg-transparent text-dark-700 font-semibold py-2 px-4 border-2 rounded" onClick={onCancel} >Cancel</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded" onClick={onConfirm}>Confirm</button>
            </Group>
        </>
    )
}