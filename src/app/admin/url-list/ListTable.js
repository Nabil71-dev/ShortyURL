'use client'
import { useState } from "react";
import { Flex, Modal, Box, Text, Button } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import { stringFilterFn, dateFilterFn } from "mantine-data-grid"
import { IconViewportWide, IconTrash } from '@tabler/icons-react';
import Table from "@/components/Table";
import ButtonPrimary from "@/components/Button";
import CreateShortForm from "@/app/user/dashboard/create-short/CreateShort.form";

const UrlTable = ({ data, user }) => {
    const [page, setPage] = useState(0);
    const [bill, setBill] = useState('')
    const [opened, { open, close }] = useDisclosure(false);
    // const { Payments, isLoading, isError, error } = useGetPayments(page + 1);

    const openModal = (value) => {
        open();
    }

    return (
        <>
            <Box w={{ base: '99%', sm: '85%' }} mx="auto" mt="xs" mb="md" p={20} sx={{ backgroundColor: '#ffffff' }}>
                <Flex align="center" justify="space-between" mb="sm">
                    <Text fw={700}>URL LIST</Text>
                    {
                        user && <ButtonPrimary click={openModal} text="Create Short" />
                    }
                     <Modal opened={opened} onClose={close} title="Create Shortened URL" centered>
                        <CreateShortForm  close={close} />
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
                                if (activeStatus === true) {
                                    return (
                                        <Text c='teal.7' fw={700}>ACTIVE</Text>
                                    )
                                }
                                else if (activeStatus === false) {
                                    return (
                                        <Text c='red.7' fw={700}>IN-ACTIVE</Text>
                                    )
                                }
                            },
                            filterFn: stringFilterFn,
                        },
                        {
                            accessorKey: "shortened",
                            header: "Shortened URL",
                            filterFn: stringFilterFn,
                        },
                        {
                            accessorKey: "mainurl",
                            header: "Original URL",
                            filterFn: stringFilterFn,
                        },
                    ]}
                />
            </Box>
        </>
    );
}

export default UrlTable;