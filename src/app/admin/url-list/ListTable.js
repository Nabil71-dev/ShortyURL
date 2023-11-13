import { Flex, Modal, Box, Text } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import { stringFilterFn } from "mantine-data-grid"
import Table from "@/components/Table";
import ButtonPrimary from "@/components/Button";
import CreateShortForm from "@/app/user/dashboard/create-short/CreateShort.form";


const UrlTable = ({ user, urls, limit, setPage, loading }) => {
    const [opened, { open, close }] = useDisclosure(false);
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
                        <CreateShortForm close={close} limit={limit} />
                    </Modal>
                </Flex>
                <Table
                    loading={loading}
                    total={urls ? urls?.total : 0}
                    withGlobalFilter
                    onPageChange={(value) => setPage(value?.pageIndex)}
                    data={urls?.data || []}
                    columns={[
                        {
                            header: "Status",
                            cell: (cell) => {
                                const date = new Date();
                                const activeStatus = cell?.row?.original?.userIDs[0]?.expiresIn
                                if (activeStatus >= date) {
                                    return (
                                        <Text c='teal.7' fw={700}>ACTIVE</Text>
                                    )
                                }
                                else {
                                    return (
                                        <Text c='red.7' fw={700}>IN-ACTIVE</Text>
                                    )
                                }
                            },
                            filterFn: stringFilterFn,
                        },
                        {
                            header: "Shortened URL",
                            cell: (cell) => {
                                const shortUrl = cell.row.original.userIDs[0].shortenedurl
                                return (
                                    <Text>{process.env.SERVER_URL}s/{shortUrl}</Text>
                                )
                            },
                            filterFn: stringFilterFn,
                        },
                        {
                            accessorKey: "originalUrl",
                            header: "Main URL",
                            filterFn: stringFilterFn,
                        },
                    ]}
                />
            </Box>
        </>
    );
}

export default UrlTable;