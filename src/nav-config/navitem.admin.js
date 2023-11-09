import { IconCalendarStats,IconLink,IconAccessible } from '@tabler/icons-react';

export const adminNavLinks = [
    {
        label: 'Dashboard',
        link: '/admin/dashboard',
        icon: <IconCalendarStats style={{ marginRight: '5px' }} size="1.45rem"/>
    },
    {
        label: 'Client List',
        link: '/admin/client-list',
        icon: <IconLink style={{ marginRight: '5px' }}  size="1.45rem"/>
    },
    {
        label: 'URL list',
        link: '/admin/url-list',
        icon: <IconAccessible style={{ marginRight: '5px' }}  size="1.45rem"/>
    }
]