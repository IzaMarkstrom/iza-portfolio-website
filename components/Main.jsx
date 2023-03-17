import { Avatar, Box, Flex, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import theme from './Chakra_theme';

const Main = () => {
    return (
        <Box>
            <Flex justifyContent='center' alignItems='center'>
                <Avatar size='3xl' src='../assets/me.jpg' alt='picture of me'/>
                <Stack spacing={4} ml={4}>
                <Text
                    bgGradient='linear(to-l, #7928CA, #FF0080)'
                    bgClip='text'
                    fontSize='6xl'
                    fontWeight='extrabold'
                    >
                    Iza Markström
                </Text>
                <Text
                    bgGradient='linear(to-l, #7928CA, #FF0080)'
                    bgClip='text'
                    fontSize='4xl'
                    fontWeight='extrabold'
                    >
                    Full Stack Web Developer
                </Text>
                </Stack>
            </Flex>
        </Box>
    );
};

export default Main;