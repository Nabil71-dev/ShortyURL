'use client'
import { Flex, Badge, Box } from "@mantine/core"

const FormLayoutPrimary = ({ title, children }) => {
    return (
            <Box w={{ base: '99%', sm: '75%', md:'56%',lg:'40%' }} p={30} sx={(theme) => ({
                backgroundColor: '#ffffff',
                borderRadius:'8px',
                borderRadius:'8px'
            })}>
                <Flex align="center" sx={{ marginTop: '1.25rem' }} >
                    <Badge mx='auto' sx={(theme) => ({
                        backgroundColor: theme.colors.green[7],
                        padding: '1.25rem 3rem',
                        fontSize: '1rem',
                        borderRadius: '12px',
                        marginBottom: '1.5rem'
                    })} variant="filled">{title}</Badge>
                </Flex>
                {children}
            </Box>
    );
}

export default FormLayoutPrimary;