import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import theme from './Chakra_theme';

const Main = () => {
    return (
        <Box>
            <Flex justifyContent='center' alignItems='center'>
                <Avatar size='2xl' src='../assets/me2.jpg' alt='picture of me'/>
                <Text fontSize='3xl' ml={4}>Hi, my name is <Text as='span' color={theme.colors.primary}>Iza</Text> and I'm a full stack web developer</Text>
            </Flex>
        </Box>
    );
};

export default Main;