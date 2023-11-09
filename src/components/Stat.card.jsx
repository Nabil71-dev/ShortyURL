import { Center, Flex, Text, Box } from '@mantine/core';

const StatCard = ({ data }) => {
    const cardData = (type, data) => {
        return (
            <Box mb={{ base: 15, sm: 5 }} w={{ base: 320, sm: 200 }} mx="auto" p={15} sx={{ backgroundColor: '#ffffff' }}>
                <Center>
                    <Text center truncate size="lg" weight={600}>{type}</Text>
                </Center>
                <Center>
                    <Text c="green.7" fw={700} size="xl">{data}</Text>
                </Center>
            </Box>
        )
    }

    return (
        <Flex direction={{ base: 'column', sm: 'row' }} align="center" justify="space-around">
            {cardData('Total URLs', data?.totalUrls)}
            {cardData('Active URLs', data?.activeURLs)}
            {cardData('Remaining', data?.leftURLs)}
        </Flex >
    );
}

export default StatCard;