import { Center, Flex, Text, Box } from '@mantine/core';

const StatCard = ({ data }) => {
    const cardData = (type, data) => {

        return (
            <Box mb={{ base: 15, sm: 5 }}
                w={{ base: 320, sm: 170, md: 250 }}
                mx="auto" p={15}
                sx={{ borderRadius: '8px' }}
                className='bg-white shadow-[0.625rem_0.625rem_0.875rem_0_rgb(225,226,228),-0.5rem_-0.5rem_1.125rem_0_rgb(225,226,228)]'
            >

                <Center>
                    <Text center truncate size="lg" weight={700}>{type}</Text>
                </Center>
                <Center>
                    <Text fw={700} size="xl">{data}</Text>
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