'use client'
import { useState, useEffect } from "react";
import { Flex, Box, Text, Loader } from "@mantine/core";
import { stringFilterFn } from "mantine-data-grid"
import { useSelector, useDispatch } from 'react-redux';
import Table from "@/components/Table";
import Link from "next/link";
import { getUsers, reset, updateUsers } from "@/services/userManage.slice";

const ClientList = () => {
    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const dispatch = useDispatch();
    const { loading, data } = useSelector(state => state.usermanage);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    useEffect(() => {
        dispatch(getUsers(page));
    }, [dispatch, page])

    const changeStatus = (value, id) => {
        const data = {
            id,
            values: {
                status: value
            }
        }
        dispatch(updateUsers(data))
    }

    return (
        <>
            {
                isLoading && <Loader />
            }
            {
                !isLoading && <Box w={{ base: '99%', sm: '85%' }} mx="auto" mt="xs" mb="md" p={20} sx={{ borderRadius: '8px', backgroundColor: '#ffffff' }}>
                    <Flex align="center" justify="space-between" mb="sm">
                        <Text fw={700}>CLIENT LIST</Text>
                    </Flex>
                    <Table
                        loading={loading}
                        total={data ? data?.total : 0}
                        withGlobalFilter
                        onPageChange={(value) => setPage(() => value.pageIndex)}
                        data={data?.data || []}
                        columns={[
                            {
                                accessorKey: "status",
                                header: "Status",
                                cell: (cell) => {
                                    const activeStatus = cell.row.original.status
                                    const id = cell.row.original.userID
                                    return (
                                        <>
                                            {
                                                activeStatus ? <button className="bg-green-500 hover:bg-green-700 text-white px-1 rounded" onClick={() => changeStatus(false, id)}>Active</button> :
                                                    <button className="bg-red-500 hover:bg-red-700 text-white px-1 rounded" onClick={() => changeStatus(true, id)} >Inactive</button>
                                            }
                                        </>
                                    )
                                },
                                size: 40,
                                filterFn: stringFilterFn,
                            },
                            {
                                accessorKey: "name",
                                header: "Name",
                                cell: (cell) => {
                                    const name = cell.row.original.name
                                    const id = cell.row.original.userID
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
                        ]}
                    />
                </Box>
            }
        </>
    );
}

export default ClientList;