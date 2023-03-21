import { Box, 
    Flex, 
    Text, 
    Image, 
    Stack, 
    Heading, 
    CardBody,
    Card,
    Divider,
    CardFooter,
    Button
} from '@chakra-ui/react'
import React from 'react'
import theme from './Chakra_theme'

export const Projects = () => {
  return (
    <Box mt='200px'>
        <Flex alignItems='center' flexDir='column'>
            <Text fontSize='3xl'>Projects</Text>
        </Flex>
        <Flex justifyContent='center' flexDir='row'>
            <Card 
                maxW='sm' 
                m={2}
                bgGradient={`linear(to-bl, ${theme.colors.background} 50%, ${theme.colors.background2})`}
                border={`1px solid ${theme.colors.darkGray}`}
                borderRadius='10px'
                color='white'>
                <CardBody>
                    <Image
                    src='../assets/projects/PlantShop.png'
                    alt='Website with leaves on banner'
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                    <Heading size='md'>Plantshop</Heading>
                    <Text>
                        This is a project was made with React, TypeScript, Node.js, Express, and MongoDB. It's a plantshop where you can add plants to your cart and checkout.You have your own profile with your cart and your last orders visable. 
                    </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <Button 
                        variant='link'
                        p={2} 
                        href='https://github.com/IzaMarkstrom/webshop'
                        bgGradient={`linear(to-r, ${theme.colors.primary}, ${theme.colors.blue})`} 
                        color='white'
                        _hover={{boxShadow: `0 0 20px 3px ${theme.colors.blue}`}}>
                        Check out on GitHub
                    </Button>
                </CardFooter>
                </Card>
                <Card 
                    maxW='sm' 
                    m={2}
                    bgGradient={`linear(to-bl, ${theme.colors.background} 50%, ${theme.colors.background2})`}
                    border={`1px solid ${theme.colors.darkGray}`}
                    borderRadius='10px'
                    color='white'>
                <CardBody>
                    <Image
                    src='../assets/projects/nissegram.PNG'
                    alt='Website with red cards'
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                    <Heading size='md'>Nissegram</Heading>
                    <Text>
                        During a hackaton we built this fake instagram with the assignment to have a Christmas theme. So we added a song and made cards that looks like presents until you click them and see what's hiding inside.
                    </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                <Button 
                        variant='solid' 
                        bgGradient={`linear(to-r, ${theme.colors.primary}, ${theme.colors.blue})`} 
                        color='white'
                        _hover={{boxShadow: `0 0 20px 3px ${theme.colors.blue}`}}>
                    Check out on GitHub
                    </Button>
                </CardFooter>
                </Card>
                <Card 
                    maxW='sm' 
                    m={2}
                    bgGradient={`linear(to-bl, ${theme.colors.background} 50%, ${theme.colors.background2})`}
                    border={`1px solid ${theme.colors.darkGray}`}
                    borderRadius='10px'
                    color='white'>
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
                <Divider />
                <CardFooter>
                    <Button 
                        variant='solid' 
                        bgGradient={`linear(to-r, ${theme.colors.primary}, ${theme.colors.background2})`} 
                        color='white'
                        _hover={{boxShadow: `0 0 20px 3px ${theme.colors.blue}`}}>
                        Check out on GitHub
                    </Button>
                </CardFooter>
                </Card>
                <Card 
                    maxW='sm' 
                    m={2}
                    bgGradient={`linear(to-bl, ${theme.colors.background} 50%, ${theme.colors.background2})`}
                    border={`1px solid ${theme.colors.darkGray}`}
                    borderRadius='10px'
                    color='white'>
                <CardBody>
                    <Image
                    src='../assets/projects/island.PNG'
                    alt='Website with horses'
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                    <Heading size='md'>Iceland on Horseback</Heading>
                    <Text>
                        This is a Twitter clone I made trying out the JavaScript library Pug. It was fun and interesting and the rest is built with NodeJs, Express and React. It is a full stack website, so you can create an account, log in and post tweets.
                    </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <Button 
                        variant='solid' 
                        bgGradient={`linear(to-r, ${theme.colors.primary}, ${theme.colors.blue})`} 
                        color='white'
                        _hover={{boxShadow: `0 0 20px 3px ${theme.colors.blue}`}}>
                        Check out on GitHub
                    </Button>
                </CardFooter>
                </Card>
            </Flex>
    </Box>
  )
}
