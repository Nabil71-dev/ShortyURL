'use client'
import useGet from "@/utils/hooks/useGet";
import { Flex, Box, Text, Group,Loader } from "@mantine/core";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Tooltip, Legend, RadialLinearScale } from "chart.js";
import { Radar } from "react-chartjs-2";

const UrlCount = () => {
    const { state } = useGet(`/api/analytics/urls`)
    const { loading, data, error } = state

    ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, RadialLinearScale);

    return (
        <Box w={{ base: '99%', sm: '85%' }} mx="auto" mt="xs" mb="md" p={20} sx={{ borderRadius:'8px',backgroundColor: '#ffffff' }}>
            <Flex align="center" justify="space-between" mb="sm">
                <Text fw={700}>URLs created over year : 2023</Text>
            </Flex>
            <Group position="center">
                <Box w={{ base: '99%', sm: '70%' }}>
                    {
                        loading && <Loader />
                    }
                    {
                        !loading && error == "" && <Radar
                            height={5}
                            width={5}
                            data={{
                                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                                datasets: [{
                                    label: `${data?.data?.message}`,
                                    data: data?.data?.data[0]?.months,
                                    fill: true,
                                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                                    borderColor: 'rgb(255, 99, 132)',
                                    pointBackgroundColor: 'rgb(255, 99, 132)',
                                    pointBorderColor: '#fff',
                                    pointHoverBackgroundColor: '#fff',
                                    pointHoverBorderColor: 'rgb(255, 99, 132)'
                                }]
                            }}
                        />
                    }
                    {
                        error != "" && <Text>Something went wrong</Text>
                    }
                </Box>
            </Group>
        </Box>
    );
}
export default UrlCount;