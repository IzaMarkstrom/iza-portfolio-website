import { Avatar, Box, Flex, Stack, Text, useMediaQuery } from '@chakra-ui/react';
import React from 'react';

const Main = () => {
    const [isMobile] = useMediaQuery("(max-width: 768px)");

    return (
        <Flex justifyContent='center'>
            <Stack 
                spacing={4} 
                ml={isMobile ? 4 : 0} // set ml=0 on smaller screens
                direction={isMobile ? "row" : "column"} // set direction to row on larger screens and column on smaller screens
                >
                {isMobile ? (
                            <Flex justifyContent='center' alignItems='center'>
                            <Stack spacing={4}>
                                    <Avatar 
                                        alignSelf='center'
                                        size='xl' 
                                        src='../assets/me.jpg' 
                                        alt='picture of me'
                                        />
                                <Stack spacing={4} alignItems='center'>
                                    <Text
                                        fontSize='3xl'
                                        fontWeight='extrabold'
                                        >
                                        Iza Markström
                                    </Text>
                                    <Text
                                        fontSize='3xl'
                                        fontWeight='extrabold'
                                        >
                                        Full Stack Web Developer
                                    </Text>
                                    <Text as='i' fontSize='xl'>Not everything is #000000 or #FFFFFF</Text>
                                </Stack>
                            </Stack>
                        </Flex>
                ) : (
                    <Flex alignItems='center'>
                        <Box boxShadow="0 0 20px rgba(255, 255, 255, 0.9)" borderRadius="full" overflow="hidden">
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
                )}
            </Stack>
        </Flex>
    );
};

export default Main;
