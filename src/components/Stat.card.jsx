'use client'
import { Center, Flex, Text, Box } from '@mantine/core';

const StatCard = ({ data }) => {
    return (
        <Flex direction={{ base: 'column', sm: 'row' }} align="center" justify="space-around">
            {data.map((item, index) => {
                return (
                    <Box mb={{ base:15, sm: 5 }} key={index} w={{ base: 320, sm: 200 }} mx="auto" p={15} sx={{ backgroundColor: '#ffffff' }}>
                        <Center>
                            <Text center truncate size="lg" weight={600}>{item?.type}</Text>

                        </Center>
                        <Center>
                            <Text c="green.7" fw={700} size="xl">{item?.value}</Text>
                        </Center>
                    </Box>
                )
            })}
        </Flex>
    );
}

export default StatCard;