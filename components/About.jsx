import { Box, Flex, Text, Image } from '@chakra-ui/react';
import React from 'react';

const About = () => {
    return (
        <Box>
            <Text fontSize='3xl'>About</Text>
            <Flex>
                <Text fontSize='xl' >I'm a full stack web developer with a passion for learning new technologies. 
                                    I'm currently working on a project that uses React, TypeScript, NextjS, Node.js, 
                                    Express, and MongoDB. I come from a background of many years in the travel industry. 
                                    The pandemic let me explore my interest for programming and set me on a path of pursuing 
                                    my dream of becomming a web developer.
                </Text>
                <Image 
                    src='https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
                    boxSize='400px'
                    />
            </Flex>
        </Box>
    );
};

export default About;