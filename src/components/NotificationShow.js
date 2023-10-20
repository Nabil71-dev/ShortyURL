import { showNotification } from '@mantine/notifications';

export const NotificationShow=({title,message,color})=>{
    showNotification({
        title,
        message,
        withCloseButton: true,
        autoClose: 3000,
        color,
    })
}