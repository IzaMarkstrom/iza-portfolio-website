import { Box, 
    Text, 
    Image,
    useMediaQuery,
    GridItem,
    Grid,
    Button,
    Flex
 } from '@chakra-ui/react';
import React from 'react';
import theme from './Chakra_theme'
import NextLink from "next/link"


function About() {
    const [isMobile] = useMediaQuery("(max-width: 768px)");

    return (  
        <>
        <Flex justifyContent='center'>
            <Text 
                fontSize='3xl'
                mt='200px'  
                mb={10}
                color='white' 
                as='b'
                id='about'>
                About
            </Text>
        </Flex> 

        <Grid 
            h='100vh' 
            ml={isMobile ? '0' : '5%'}
            gridTemplateColumns={isMobile ? '100%' : '35% 45%'}
            gap='10%'
            >

            {isMobile ? ( 
                <>
                    <Grid gridTemplateColumns='repeat(auto-fit, minmax(150px, 1fr))' justifyItems='center' gap='5%'>

                        <Box className='flip_card' h={isMobile ? '130px' : '200px'} minW={isMobile ? '130px' : '200px'} maxW={isMobile ? '130px' : '200px'}>
                            <Box className='flip_card_inner'>
                                <Box className='flip_card_front' borderRadius='2rem'>
                                    <Text color='white' fontSize='xl' textAlign='center' mt={4}>Shuffle</Text>
                                </Box>
                                <Box className='flip_card_back'>
                                    <Image src='../assets/rsz_shuffle.jpg' alt='me in a shuffle studio' borderRadius='2rem' h={isMobile ? '130px' : '200px'} minW={isMobile ? '130px' : '200px'} maxW={isMobile ? '130px' : '200px'}/>
                                </Box>
                            </Box>
                        </Box>

                        <Box className='flip_card' h={isMobile ? '130px' : '200px'} minW={isMobile ? '130px' : '200px'} maxW={isMobile ? '130px' : '200px'}>
                            <Box className='flip_card_inner'>
                                <Box className='flip_card_front' borderRadius='2rem'>
                                    <Text color='white' fontSize='xl' textAlign='center' mt={4}>Debugging buddy</Text>
                                </Box>
                                <Box className='flip_card_back'>
                                    <Image src='../assets/rsz_11okie.jpg' alt='racoon stuffed animal' borderRadius='2rem' h={isMobile ? '130px' : '200px'} minW={isMobile ? '130px' : '200px'} maxW={isMobile ? '130px' : '200px'}/>
                                </Box>
                            </Box>
                        </Box>


                        <Box className='flip_card' h={isMobile ? '130px' : '200px'} minW={isMobile ? '130px' : '200px'} maxW={isMobile ? '130px' : '200px'}>
                            <Box className='flip_card_inner'>
                                <Box className='flip_card_front' borderRadius='2rem'>
                                    <Text color='white' fontSize='xl' textAlign='center' mt={4}>Pirate</Text>
                                </Box>
                                <Box className='flip_card_back'>
                                    <Image src='../assets/rsz_pirate.jpg' alt='me in pirate outfit looking out to sea' borderRadius='2rem' h={isMobile ? '130px' : '200px'} minW={isMobile ? '130px' : '200px'} maxW={isMobile ? '130px' : '200px'}/>
                                </Box>
                            </Box>
                        </Box>

                    </Grid>
                    <Grid gap='5%' justifyItems='center' pl={10} pr={10}>
                            <Text fontSize='m' color='white'>
                                I&apos;m a full stack web developer with a passion for learning new technologies. 
                                Instead of a rubber duck helping me to debug my code, using the method rubber-duck-debugging, 
                                I have a different animal as you can see in one of the pictures above.
                            </Text>
                            <Text>
                                I come from a background of many years in the travel industry, where I worked as a travel agent. I&apos;m still always looking forward towards my next trip!
                                The pandemic let me explore my interest for programming and set me on a path of pursuing 
                                my dream of becomming a web developer. Apart from coding, I love to dance shuffle and going to both small and big concerts.
                                I also sew my own pirate clothes for the Medieval week on Gotland. 
                            </Text>
                        <Grid id='about_me' orderRadius='2rem' mb={7} h={isMobile ? '180px' : '300px'} minW={isMobile ? '180px' : '300px'} maxW={isMobile ? '180px' : '300px'}>
                                <Image src='../assets/me2.jpg' alt='me' id='about_me_image' borderRadius='2rem' />
                        </Grid>
                        
                        <GridItem>
                            <Button 
                                variant='solid' 
                                bgGradient={`linear(to-r, ${theme.colors.primary}, ${theme.colors.darkGreen})`} 
                                color='white'
                                _hover={{p: '15px'}}
                                p='10px'
                                borderRadius='20px'
                                >
                                        <NextLink href='#contact'>
                                            Let&apos;s talk!
                                        </NextLink>
                                </Button>
                        </GridItem>
                    </Grid>
                    </>
            ) : (  
                <>         
            <Grid id='about_me' borderRadius='2rem' maxH='400px' maxW='400px'>
                <Image src='../assets/me2.jpg' alt='me' id='about_me_image' borderRadius='2rem' maxH='400px' />
            </Grid>
            <Grid gridTemplateColumns='repeat(auto-fit, minmax(200px, 1fr))' gridTemplateRows='30% 40% 30%'>
                        <Box className='flip_card' h='200px' minW='200px'  maxW='200px'>
                            <Box className='flip_card_inner'>
                                <Box className='flip_card_front' borderRadius='2rem'>
                                    <Text color='white' fontSize='2xl' textAlign='center' mt={4}>Shuffle</Text>
                                </Box>
                                <Box className='flip_card_back'>
                                    <Image src='../assets/rsz_shuffle.jpg' alt='me in a shuffle studio' borderRadius='2rem' h='200px' minW='200px'  maxW='200px'/>
                                </Box>
                            </Box>
                        </Box>

                        <Box className='flip_card' h='200px' minW='200px'  maxW='200px'>
                            <Box className='flip_card_inner'>
                                <Box className='flip_card_front' borderRadius='2rem'>
                                    <Text color='white' fontSize='2xl' textAlign='center' className='about_me_text_cards' mt={4}>Debugging</Text>
                                    <Text color='white' fontSize='2xl' textAlign='center' className='about_me_text_cards' mt={4}>buddy</Text>
                                </Box>
                                <Box className='flip_card_back'>
                                    <Image src='../assets/rsz_11okie.jpg' alt='racoon stuffed animal' borderRadius='2rem' h='200px' minW='200px'  maxW='200px'/>
                                </Box>
                            </Box>
                        </Box>


                        <Box className='flip_card' h='200px' minW='200px'  maxW='200px'>
                            <Box className='flip_card_inner'>
                                <Box className='flip_card_front' borderRadius='2rem'>
                                    <Text color='white' fontSize='2xl' textAlign='center' className='about_me_text_cards' mt={4}>Pirate</Text>
                                </Box>
                                <Box className='flip_card_back'>
                                    <Image src='../assets/rsz_pirate.jpg' alt='me in pirate outfit looking out to sea' borderRadius='2rem' h='200px' minW='200px'  maxW='200px'/>
                                </Box>
                            </Box>
                        </Box>

                        <GridItem colSpan={3}>
                        <Text fontSize='m' color='white'>
                            I&apos;m a full stack web developer with a passion for learning new technologies. 
                            Instead of a rubber duck helping me to debug my code, using the method rubber-duck-debugging, 
                            I have a different animal as you can see in one of the pictures above.
                        </Text> <br />
                        <Text>
                            I come from a background of many years in the travel industry, where I worked as a travel agent. I&apos;m still always looking forward towards my next trip!
                            The pandemic let me explore my interest for programming and set me on a path of pursuing 
                            my dream of becomming a web developer instead. Apart from coding, I love to dance shuffle and going to both small and big concerts.
                            I also sew my own pirate clothes for the Medieval week on Gotland. 
                        </Text>
                        </GridItem>
                        <GridItem>
                            <Button 
                                variant='solid' 
                                bgGradient={`linear(35deg, ${theme.colors.primary}, ${theme.colors.darkGreen})`} 
                                color='white'
                                _hover={{bg:`${theme.colors.primary}`}}
                                p='30px'
                                borderRadius='20px'
                                >
                                <NextLink href='#contact'>
                                    Let&apos;s talk!
                                </NextLink>
                        </Button>
                        </GridItem>
                                </Grid>

                    </>
            )}

        </Grid>
     
            </>
    );
};

export default About;

