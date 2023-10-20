'use client'
import { Flex, Box, Text, Group } from "@mantine/core";
import {
    Chart as ChartJS, CategoryScale,
    LinearScale,
    PointElement,
    LineElement, ArcElement, Tooltip, Legend, RadialLinearScale
} from "chart.js";
import { Radar } from "react-chartjs-2";

const UrlCount = () => {
    ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale,
        LinearScale,
        PointElement,
        LineElement, RadialLinearScale);

    return (
        <Box w={{ base: '99%', sm: '85%' }} mx="auto" mt="xs" mb="md" p={20} sx={{ backgroundColor: '#ffffff' }}>
            <Flex align="center" justify="space-between" mb="sm">
                <Text fw={700}>URLs created over year : 2023</Text>
            </Flex>
            <Group position="center">
                <Box w={{ base: '99%', sm: '70%'}}>
                    <Radar
                        height={5}
                        width={5}
                        data={{
                            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                            datasets: [{
                                label: 'URL count over year',
                                data: [10, 20, 0, 0, 65, 59, 90, 81, 56, 55, 40, 55],
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
                </Box>
            </Group>
        </Box>
    );
}
export default UrlCount;