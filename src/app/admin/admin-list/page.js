'use client'
import { useState } from "react";
import { Flex, Modal, Box, Text, Switch } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import { stringFilterFn, dateFilterFn } from "mantine-data-grid"
import { IconViewportWide, IconTrash } from '@tabler/icons-react';
import Table from "@/components/Table";
import ButtonPrimary from "@/components/Button";
import CreateAdminForm from "./create-admin/CreateAdmin.form";
import { ConfirmModal } from "@/components/ConfirmModal";
import { NotificationShow } from "@/components/NotificationShow";

const data = [
    {
        name: 'admin one',
        email: 'admin01@gmail.com',
        isActive: true,
        type: 'super-admin',
    },
    {
        name: 'admin two',
        email: 'admin02@gmail.com',
        isActive: true,
        type: 'admin',
    },
    {
        name: 'admin three',
        email: 'admin03@gmail.com',
        isActive: false,
        type: 'admin',
    }
]

const AdminList = () => {
    const [page, setPage] = useState(0);
    const [user, setUser] = useState('')
    const [opened, { open, close }] = useDisclosure(false);
    const [openedOne, setOpenedOne] = useState(false);
    // const { Payments, isLoading, isError, error } = useGetPayments(page + 1);

    const openModal = (value) => {
        setUser(value);
        setOpenedOne(true);
    }

    const deleteAdmin = () => {
        if (user) {
            NotificationShow({ title: 'Successful', message: 'Deletion successful', color: 'green' })
        }
        else {
            NotificationShow({ title: 'Failed', message: 'Something went wrong', color: 'red' })
        }
    }

    const changeStatus = (e) => {
        // e.target.checked=false
    }

    return (
        <>
            <Box w={{ base: '99%', sm: '85%' }} mx="auto" mt="xs" mb="md" p={20} sx={{ backgroundColor: '#ffffff' }}>
                <Flex align="center" justify="space-between" mb="sm">
                    <Text fw={700}>ADMIN LIST</Text>
                    <ButtonPrimary text="Create" click={() => open()} />
                    <Modal opened={opened} onClose={close} title="Create admin" centered>
                        <CreateAdminForm close={close} />
                    </Modal>
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
                            // size: 60,
                            filterFn: stringFilterFn,
                        },
                        {
                            accessorKey: "email",
                            header: "Email",
                            // size: 60,
                            filterFn: stringFilterFn,
                        },
                        {
                            accessorKey: "type",
                            header: "Role",
                            // size: 50,
                            filterFn: stringFilterFn,
                        },
                        {
                            header: "Action",
                            size: 50,
                            cell: (cell) => {
                                const userInfo = cell?.row?.original
                                return (
                                    <>
                                        {/* onClick={() => ConfirmModal({ text: '', color: 'red', confirm: () => deleteAdmin(userInfo) })}   */}
                                        <Text title="view" onClick={() => openModal(userInfo)} sx={{ color: 'red', cursor: 'pointer' }}><IconTrash /></Text>
                                        <Modal opened={openedOne} onClose={() => setOpenedOne(false)} centered>
                                            <ConfirmModal text="Do you really want to remove this admin ?" confirm={deleteAdmin} close={() => setOpenedOne(false)} />
                                        </Modal>
                                    </>
                                )
                            },
                        },
                    ]}
                />
            </Box>
        </>
    );
}

export default AdminList;