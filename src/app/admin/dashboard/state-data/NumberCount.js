'use client'
import useGet from "@/utils/hooks/useGet";
import { Flex, Box, Text, Group, Loader } from "@mantine/core";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

const NumberCount = () => {
    const { state } = useGet(`/api/analytics/numbers`)
    const { loading, data, error } = state

    ChartJS.register(ArcElement, Tooltip, Legend);

    return (
        <Box w={{ base: '90%', sm: '85%' }} mx="auto" mt="xs" mb="md" p={20} sx={{ backgroundColor: '#ffffff' }}>
            <Flex align="center" justify="space-between" mb="sm">
                <Text fw={700}>Numeric statistics</Text>
            </Flex>
            <Group position="center">
                <Box w={{ base: '99%', sm: '50%', md: '40%' }}>
                    {
                        loading && <Loader />
                    }
                    {
                        !loading && error == "" && <Doughnut
                            height={5}
                            width={5}
                            data={{
                                labels: [
                                    'Total Users',
                                    'Created URLs',
                                    'Active URLs',
                                    'Total URLs'
                                ],
                                datasets: [{
                                    label: `${data?.data?.message}`,
                                    data: [`${data?.data?.totalUsers}`, `${data?.data?.createdUrls}`, `${data?.data?.activeUrls}`, `${data?.data?.totalUrls}`],
                                    backgroundColor: [
                                        'rgb(255, 99, 132)',
                                        'rgb(54, 162, 235)',
                                        'rgb(255, 205, 86)',
                                        'rgb(119, 75, 0)',
                                    ],
                                    hoverOffset: 4
                                }]
                            }}
                        />
                    }
                    {
                        error!="" && <Text>Something went wrong</Text>
                    }
                </Box>
            </Group>
        </Box>
    );
}
export default NumberCount;