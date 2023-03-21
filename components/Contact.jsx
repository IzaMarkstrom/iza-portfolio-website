import React from 'react';
import {
    Button,
    Box,
    Flex,
    Text
  } from '@chakra-ui/react'
import theme from './Chakra_theme';

const Contact = () => {
    return (
        <Box mt='200px' id='contact'>
            <Flex alignItems='center' flexDir='column'>
                <Text fontSize='3xl'>Contact</Text>
            </Flex>
            <Flex justifyContent='center' flexDir='row'>
                <Button 
                    variant='solid' 
                    bgGradient={`linear(to-r, ${theme.colors.primary}, ${theme.colors.blue})`} 
                    color='white'
                    _hover={{boxShadow: `0 0 20px 3px ${theme.colors.blue}`}}
                    size='lg'
                    p='50px'
                    m='50px'
                    borderRadius='20px'
                    >Contact me!</Button>
            </Flex>
        </Box>
    );
};

export default Contact;