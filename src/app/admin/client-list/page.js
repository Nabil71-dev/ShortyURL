'use client'
import { useState } from "react";
import { Flex, Modal, Box, Text, Button, Switch } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import { stringFilterFn, dateFilterFn } from "mantine-data-grid"
import { IconViewportWide, IconTrash } from '@tabler/icons-react';
import Table from "@/components/Table";
import ButtonPrimary from "@/components/Button";
import Link from "next/link";

const data = [
    {
        id: '1',
        name: 'user one',
        email: 'user01@gmail.com',
        isActive: true,
    },
    {
        id: '2',
        name: 'user two',
        email: 'user02@gmail.com',
        isActive: true,
    },
    {
        id: '3',
        name: 'user three',
        email: 'user03@gmail.com',
        isActive: false,
    },
]

const ClientList = () => {
    const [page, setPage] = useState(0);
    const [bill, setBill] = useState('')
    const [opened, { open, close }] = useDisclosure(false);
    // const { Payments, isLoading, isError, error } = useGetPayments(page + 1);

    const openModal = (value) => {
        open();
    }

    const changeStatus = (e) => {
        // e.target.checked=false
    }

    return (
        <>
            <Box w={{ base: '99%', sm: '85%' }} mx="auto" mt="xs" mb="md" p={20} sx={{ backgroundColor: '#ffffff' }}>
                <Flex align="center" justify="space-between" mb="sm">
                    <Text fw={700}>CLIENT LIST</Text>
                </Flex>
                <Table
                    // loading={isLoading}
                    // total={Payments?.data?.meta ? Payments?.data?.meta?.total : 0}
                    withGlobalFilter
                    // onPageChange={(value) => setPage(value.pageIndex)}
                    data={data || []}
                    columns={[
                        {
                            accessorKey: "isActive",
                            header: "Status",
                            cell: (cell) => {
                                const activeStatus = cell.row.original.isActive
                                return (
                                    <Switch color="green.7" defaultChecked={activeStatus} onChange={(e) => changeStatus(e)} />
                                )
                            },
                            // size: 50,
                            filterFn: stringFilterFn,
                        },
                        {
                            accessorKey: "name",
                            header: "Name",
                            cell: (cell) => {
                                const name = cell.row.original.name
                                const id = cell.row.original.id
                                return (
                                    <Link href={`/admin/client-list/${id}`} style={{ textDecoration: 'none', color: '#37b24d' }}>{name}</Link>
                                )
                            },
                            // size: 60,
                            filterFn: stringFilterFn,
                        },
                        {
                            accessorKey: "email",
                            header: "Email",
                            // size: 60,
                            filterFn: stringFilterFn,
                        },
                        // {
                        //     accessorKey: "type",
                        //     header: "Role",
                        //     // size: 50,
                        //     filterFn: stringFilterFn,
                        // },
                        // {
                        //     header: "Action",
                        //     size: 50,
                        //     cell: (cell) => {
                        //         const userInfo = cell?.row?.original
                        //         return (
                        //             <>
                        //                 <Text onClick={() => openModal(userInfo)} sx={{ color: 'red', cursor: 'pointer' }} title="view"><IconTrash /></Text>
                        //                 <Modal opened={opened} onClose={close} title="Payment status update" centered>
                        //                 <BillingStatusForm data={bill} close={close} />
                        //                 </Modal>
                        //             </>
                        //         )
                        //     },
                        // },
                    ]}
                />
            </Box>
        </>
    );
}

export default ClientList;