import { Flex, Modal, Box, Text } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import { stringFilterFn } from "mantine-data-grid"
import Table from "@/components/Table";
import ButtonPrimary from "@/components/Button";
import CreateShortForm from "@/app/user/dashboard/create-short/CreateShort.form";

const AllUrlsTable = ({ urls, user, setPage, loading }) => {
    const [opened, { open, close }] = useDisclosure(false);

    const openModal = (value) => {
        open();
    }

    return (
        <>
            <Box w={{ base: '99%', sm: '85%' }} mx="auto" mt="xs" mb="md" p={20} sx={{ borderRadius:'8px',backgroundColor: '#ffffff' }}>
                <Flex align="center" justify="space-between" mb="sm">
                    <Text fw={700}>URL LIST</Text>
                    {
                        user && <ButtonPrimary click={openModal} text="Create Short" />
                    }
                    <Modal opened={opened} onClose={close} title="Create Shortened URL" centered>
                        <CreateShortForm close={close} />
                    </Modal>
                </Flex>
                <Table
                    loading={loading}
                    total={urls ? urls?.total : 0}
                    withGlobalFilter
                    onPageChange={(value) => setPage(value.pageIndex)}
                    data={urls.data || []}
                    columns={[
                        {
                            accessorKey: "originalUrl",
                            header: "Main URL",
                            filterFn: stringFilterFn,
                        },
                        {
                            header: "Shortened URL",
                            cell: (cell) => {
                                const shortUrl = cell.row.original.shortenedurl
                                return (
                                    <Text>{process.env.SERVER_URL}s/{shortUrl}</Text>
                                )
                            },
                            filterFn: stringFilterFn,
                        },
                    ]}
                />
            </Box>
        </>
    );
}

export default AllUrlsTable;