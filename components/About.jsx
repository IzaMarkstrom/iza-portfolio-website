import { Box, 
    Text, 
    Image,
    Stack,
    Heading,
    Card,
    CardBody
 } from '@chakra-ui/react';
import React from 'react';
import theme from './Chakra_theme'

const About = () => {
    return (
        <Box mt='200px'>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                maxW='1500px'
                mx='auto'
                p={2}
                bgGradient={`linear(to-bl, ${theme.colors.background} 50%, ${theme.colors.primary})`}
                border={`1px solid ${theme.colors.darkGray}`}
                borderRadius='10px'
                color='white'
                >

                <Stack>
                    <CardBody>
                    <Heading fontSize='3xl'>About</Heading>

                    <Text fontSize='2xl'>
                        I'm a full stack web developer with a passion for learning new technologies. 
                        I'm currently working on a project that uses React, TypeScript, NextjS, Node.js, 
                        Express, and MongoDB. I come from a background of many years in the travel industry. 
                        The pandemic let me explore my interest for programming and set me on a path of pursuing 
                        my dream of becomming a web developer.
                    </Text>
                    </CardBody>
                </Stack>
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '400px' }}
                    src='../assets/Presentation1.jpg'
                    alt='Laptop and phone on a desk'
                />
            </Card>
        </Box>
    );
};

export default About;