import { Avatar, Box, Flex, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import theme from './Chakra_theme';

const Main = () => {
    return (
        <Box>
            <Flex justifyContent='center' alignItems='center'>
                <Box boxShadow="0 0 20px rgba(99, 63, 211, 0.9)" borderRadius="full" overflow="hidden">
                    <Avatar 
                        size='3xl' 
                        src='../assets/me.jpg' 
                        alt='picture of me'
                        />
                </Box>
                <Stack spacing={4} ml={4}>
                <Text
                    fontSize='6xl'
                    fontWeight='extrabold'
                    >
                    Iza Markström
                </Text>
                <Text
                    fontSize='6xl'
                    fontWeight='extrabold'
                    >
                    Full Stack Web Developer
                </Text>
                <Text as='i' fontSize='2xl'>Not everything is #000000 or #FFFFFF</Text>
                </Stack>
            </Flex>
        </Box>
    );
};

export default Main;