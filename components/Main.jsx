import { Flex, Stack, Text, useMediaQuery, Image, Box } from '@chakra-ui/react';
import React from 'react';

function Main() {
    const [isMobile] = useMediaQuery("(max-width: 768px)");

    return (
        <Flex justifyContent='center' h='100vh' id='home' w='100%' mt={12}>
            <Stack 
                spacing={4} 
                ml={isMobile ? 4 : 0} // set ml=0 on smaller screens
                direction={isMobile ? "row" : "column"} // set direction to row on larger screens and column on smaller screens
                >
                {isMobile ? (
                            <Flex mt={0}>
                            <Stack spacing={3}>
                                <Image 
                                    w='300px'
                                    src='../assets/meBlurred.png' 
                                    alt='picture of me'
                                    className='image-fade'
                                    />
                                <Stack spacing={3} alignItems='center'>
                                    <Text
                                        fontSize='3xl'
                                        fontWeight='extrabold'
                                        className="main-text-fade"
                                        >
                                        Iza Markström
                                    </Text>
                                    <Text
                                        fontSize='3xl'
                                        fontWeight='extrabold'
                                        justifySelf='center'
                                        className="main-text-fade"
                                        >
                                        Full Stack Developer
                                    </Text>
                                    <Text 
                                        as='i' 
                                        fontSize='xl'
                                        className="main-text-fade">Not everything is #000000 or #FFFFFF</Text>
                                </Stack>
                            </Stack>
                        </Flex>
                ) : (
                    <Flex
                    alignItems="center"
                    justifyContent="center"
                    >
                        <Image
                            src="../assets/meBlurred.png"
                            alt="picture of me"
                            className='image-fade'
                        />
                    <Stack
                      spacing={4}
                      ml={4}
                    >
                      <Text
                        fontSize="5xl"
                        fontWeight="extrabold"
                        className="main-text-fade"
                        _hover={{
                          transform: "translateY(-8px)",
                          transition: "transform 0.3s ease-out",
                        }}
                      >
                        Iza Markström
                      </Text>
                      <Text
                        fontSize="5xl"
                        fontWeight="extrabold"
                        className="main-text-fade"
                        _hover={{
                          transform: "translateY(-8px)",
                          transition: "transform 0.3s ease-out",
                        }}
                      >
                        Full Stack Developer
                      </Text>
                      <Text
                        as="i"
                        fontSize="xl"
                        className="main-text-fade"
                        _hover={{
                          transform: "translateY(-8px)",
                          transition: "transform 0.3s ease-out",
                        }}
                      >
                        Not everything is #000000 or #FFFFFF
                      </Text>
                        </Stack>
                    </Flex>
                )}
            </Stack>
        </Flex>
    );
};

export default Main;
