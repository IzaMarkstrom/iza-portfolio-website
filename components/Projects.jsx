import { Grid, 
    Flex, 
    Text, 
    Image, 
    Stack, 
    Heading, 
    CardBody,
    Card,
    CardFooter,
    Button
} from '@chakra-ui/react'
import React from 'react'
import NextLink from "next/link"
import theme from './Chakra_theme'

export const Projects = () => {
  return (
    <>
    <Flex justifyContent='center' mt='200px' id='projects' flexDir='column' pl={12} pr={12}>
    <Text 
        fontSize='3xl' 
        alignSelf='center' 
        mb={10} 
        color='white' 
        as='b'>
            Projects
    </Text>
        
        <Grid gap='2em' gridTemplateColumns='repeat(auto-fit, minmax(250px, 1fr))'>
            <Card 
                borderRadius='10px'
                color='black'
                boxShadow='0px 5px 10px rgba(0, 0, 0, 0.5)'>
                <CardBody>
                    <Image
                    src='../assets/projects/PlantShop.png'
                    alt='Website with leaves on banner'
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                    <Heading size='md'>Plantshop</Heading>
                    <Text>
                        This is a project was made with React, TypeScript, Node.js, Express, and MongoDB. It&apos;s a plantshop where you can add plants to your cart and checkout.You have your own profile with your cart and your last orders visable. 
                    </Text>
                    </Stack>
                </CardBody>
                <CardFooter>
                    <Button 
                        variant='solid' 
                        p={3}
                        bgGradient={`linear(45deg, ${theme.colors.primary}, ${theme.colors.darkGreen})`} 
                        color='white'
                        borderRadius='50px'
                        _hover={{bg:`${theme.colors.primary}`}}>
                            <NextLink href='https://github.com/IzaMarkstrom/webshop' target='_blank'>
                                Link to GitHub
                            </NextLink>
                    </Button>
                </CardFooter>
                </Card>
                <Card
                    borderRadius='10px'
                    color='black'
                    boxShadow='0px 5px 10px rgba(0, 0, 0, 0.5)'>
                <CardBody>
                    <Image
                    src='../assets/projects/nissegram.PNG'
                    alt='Website with red cards'
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                    <Heading size='md'>Nissegram</Heading>
                    <Text>
                        During a hackaton we built this fake instagram with the assignment to have a Christmas theme. So we added a song and made cards that looks like presents until you click them and see what&apos;s hiding inside.
                    </Text>
                    </Stack>
                </CardBody>
                <CardFooter>
                <Button 
                        variant='solid' 
                        p={3}
                        bgGradient={`linear(45deg, ${theme.colors.primary}, ${theme.colors.darkGreen})`} 
                        color='white'
                        borderRadius='50px'
                        _hover={{bg:`${theme.colors.primary}`}}>
                            <NextLink href='https://github.com/IzaMarkstrom/Nissegram-Hackaton' target='_blank'>
                                Link to GitHub
                            </NextLink>
                    </Button>
                </CardFooter>
                </Card>
                <Card 
                    borderRadius='10px'
                    color='black'
                    boxShadow='0px 5px 10px rgba(0, 0, 0, 0.5)'>
                <CardBody>
                    <Image
                    src='https://images.unsplash.com/photo-1566241477600-ac026ad43874?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=846&q=80'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                    <Heading size='md'>Twitter-clone</Heading>
                    <Text>
                        This is a Twitter clone I made trying out the JavaScript library Pug. It was fun and interesting and the rest is built with NodeJs, Express and React. It is a full stack website, so you can create an account, log in and post tweets.
                    </Text>
                    </Stack>
                </CardBody>
                <CardFooter>
                    <Button 
                        variant='solid' 
                        p={3}
                        bgGradient={`linear(45deg, ${theme.colors.primary}, ${theme.colors.darkGreen})`} 
                        color='white'
                        borderRadius='50px'
                        _hover={{bg:`${theme.colors.primary}`}}>
                            <NextLink href='https://github.com/IzaMarkstrom/twitter-clone' target='_blank'>
                                Link to GitHub
                            </NextLink>
                    </Button>
                </CardFooter>
                </Card>
                <Card 
                    borderRadius='10px'
                    color='black'
                    boxShadow='0px 5px 10px rgba(0, 0, 0, 0.5)'>
                <CardBody>
                    <Image
                    src='../assets/projects/island.PNG'
                    alt='Website with horses'
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                    <Heading size='md'>Iceland on Horseback</Heading>
                    <Text>
                        This was my first HTML and CSS project. I made it to practice my skills and to get a better understanding of how to use HTML and CSS.
                    </Text>
                    </Stack>
                </CardBody>
                <CardFooter>
                    <Button 
                        variant='solid' 
                        p={3}
                        bgGradient={`linear(45deg, ${theme.colors.primary}, ${theme.colors.darkGreen})`} 
                        color='white'
                        borderRadius='50px'
                        _hover={{bg:`${theme.colors.primary}`}}>
                            <NextLink href='https://github.com/IzaMarkstrom/IzaMarkstrom.github.io' target='_blank'>
                                Link to GitHub
                            </NextLink>
                    </Button>
                    <Button 
                        variant='solid' 
                        p={3}
                        ml={3}
                        bgGradient={`linear(45deg, ${theme.colors.primary}, ${theme.colors.darkGreen})`} 
                        color='white'
                        borderRadius='50px'
                        _hover={{bg:`${theme.colors.primary}`}}>
                            <NextLink href='https://izamarkstrom.github.io/home.html' target='_blank'>
                                Preview
                            </NextLink>
                    </Button>
                </CardFooter>
                </Card>
            </Grid>
    </Flex>
    </>
  )
}
