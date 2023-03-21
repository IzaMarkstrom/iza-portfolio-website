import { Box, 
    Text, 
    Image,
    Stack,
    Flex,
    Card,
    CardBody,
    useMediaQuery
 } from '@chakra-ui/react';
import React from 'react';
import theme from './Chakra_theme'

const About = () => {
    const [isMobile] = useMediaQuery("(max-width: 768px)");
    return (
        <Flex justifyContent='center' mt='200px' id='about'>
        <Stack 
            spacing={4} 
            ml={isMobile ? 4 : 0} // set ml=0 on smaller screens
            direction={isMobile ? "row" : "column"} // set direction to row on larger screens and column on smaller screens
            >
                {isMobile ? (
                            <Flex justifyContent='center' alignItems='center' flexDir='column'>
                                <Text fontSize='xl'>About me</Text>
                                <Card
                                    direction={{ base: 'column', sm: 'column' }}
                                    overflow='hidden'
                                    borderRadius='30px'
                                    maxW='1500px'
                                    mx='auto'
                                    p={2}
                                    bgGradient={`linear(to-bl, ${theme.colors.background} 50%, ${theme.colors.background2})`}
                                    color='white'
                                    >
                        
                                <Stack>
                                    <CardBody>
                                    <Text fontSize='m'>
                                        I'm a full stack web developer with a passion for learning new technologies. 
                                        I'm currently working on a project that uses React, TypeScript, NextjS, Node.js, 
                                        Express, and MongoDB. I come from a background of many years in the travel industry. 
                                        The pandemic let me explore my interest for programming and set me on a path of pursuing 
                                        my dream of becomming a web developer. Apart from coding, I love to dance shuffle and going to both small and big concerts.
                                        I also sew my own pirate clothes for the Medieval week on Gotland. 
                                    </Text>
                                    </CardBody>
                                </Stack>
                                <Image
                                    alignSelf='center'
                                    objectFit='cover'
                                    maxW={{ base: '100%', sm: '400px' }}
                                    src='../assets/Presentation1.jpg'
                                    alt='Laptop and phone on a desk'
                                />
                            </Card>
                        </Flex>

                ) : (
                    <Flex justifyContent='center' alignItems='center' flexDir='column'>
                        <Text fontSize='3xl'>About me</Text>
                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            borderRadius='30px'
                            maxW='1500px'
                            mx='auto'
                            p={2}
                            bgGradient={`linear(to-bl, ${theme.colors.background} 50%, ${theme.colors.background2})`}
                            color='white'
                            >
        
                            <Stack>
                                <CardBody>
                                <Text fontSize='2xl'>
                                    I'm a full stack web developer with a passion for learning new technologies. 
                                    I'm currently working on a project that uses React, TypeScript, NextjS, Node.js, 
                                    Express, and MongoDB. I come from a background of many years in the travel industry. 
                                    The pandemic let me explore my interest for programming and set me on a path of pursuing 
                                    my dream of becomming a web developer. Apart from coding, I love to dance shuffle and going to both small and big concerts.
                                    I also sew my own pirate clothes for the Medieval week on Gotland. 
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
                    </Flex>
                )}
        </Stack>
        </Flex>
    );
};

export default About;