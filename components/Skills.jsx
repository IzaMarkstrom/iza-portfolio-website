import { Box, 
    Text, 
    Image, 
    Card,
    Heading,
    CardBody,
    SimpleGrid,
    CardHeader,
    Flex
} from '@chakra-ui/react'
import React from 'react'
import theme from './Chakra_theme'

export const Skills = () => {
  return (
    <Box mt='200px' id='skills'>
        <Flex alignItems='center' flexDir='column'>
            <Text fontSize='3xl' mb={4}>Skills</Text>
            <Text fontSize='3xl'>I prefer the MERN stack, but these are the different programming languages I have been coding with</Text> 
        </Flex>
            <Flex justifyContent='center' flexDir='row'>
            <Box>
                <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(150px, 1fr))'>
                <Card 
                    alignItems='center'                 
                    bgGradient={`linear(to-bl, ${theme.colors.background} 50%, ${theme.colors.background2})`}
                    borderRadius='10px'
                    color='white'>
                    <CardHeader>
                        <Heading size='md'>HTML</Heading>
                    </CardHeader>
                    <CardBody>
                        <Image src='../assets/skills/html.png' />
                    </CardBody>
                </Card>
                <Card 
                    alignItems='center'                 
                    bgGradient={`linear(to-bl, ${theme.colors.background} 50%, ${theme.colors.background2})`}
                    borderRadius='10px'
                    color='white'>
                    <CardHeader>
                        <Heading size='md'>CSS</Heading>
                    </CardHeader>
                    <CardBody>
                        <Image src='../assets/skills/css.png' />
                    </CardBody>
                </Card>
                <Card 
                    alignItems='center'                 
                    bgGradient={`linear(to-bl, ${theme.colors.background} 50%, ${theme.colors.background2})`}
                    borderRadius='10px'
                    color='white'>
                    <CardHeader>
                        <Heading size='md'>JavaScript</Heading>
                    </CardHeader>
                    <CardBody>
                        <Image src='../assets/skills/javascript.png' />
                    </CardBody>
                </Card>
                <Card 
                    alignItems='center'                 
                    bgGradient={`linear(to-bl, ${theme.colors.background} 50%, ${theme.colors.background2})`}
                    borderRadius='10px'
                    color='white'>
                    <CardHeader>
                        <Heading size='md'>React</Heading>
                    </CardHeader>
                    <CardBody>
                        <Image src='../assets/skills/react.png' /> 
                    </CardBody>
                </Card>
                <Card 
                    alignItems='center'                 
                    bgGradient={`linear(to-bl, ${theme.colors.background} 50%, ${theme.colors.background2})`}
                    borderRadius='10px'
                    color='white'>
                    <CardHeader>
                        <Heading size='md'>Vue</Heading>
                    </CardHeader>
                    <CardBody>
                        <Image src='../assets/skills/rsz_1vuejs_logo_2svg.png' />
                    </CardBody>
                </Card>
                <Card 
                    alignItems='center'                 
                    bgGradient={`linear(to-bl, ${theme.colors.background} 50%, ${theme.colors.background2})`}
                    borderRadius='10px'
                    color='white'>
                    <CardHeader>
                        <Heading size='md'>Node</Heading>
                    </CardHeader>
                    <CardBody>
                        <Image src='../assets/skills/node.png' />
                    </CardBody>
                </Card>
                <Card 
                    alignItems='center'                 
                    bgGradient={`linear(to-bl, ${theme.colors.background} 50%, ${theme.colors.background2})`}
                    borderRadius='10px'
                    color='white'>
                    <CardHeader>
                        <Heading size='md'>MongoDB</Heading>
                    </CardHeader>
                    <CardBody>
                        <Image src='../assets/skills/mongo.png' />
                    </CardBody>
                </Card>
                <Card 
                    alignItems='center'                 
                    bgGradient={`linear(to-bl, ${theme.colors.background} 50%, ${theme.colors.background2})`}
                    borderRadius='10px'
                    color='white'>
                    <CardHeader>
                        <Heading size='md'>NextJs</Heading>
                    </CardHeader>
                    <CardBody>
                        <Image src='../assets/skills/nextjs.png' />
                    </CardBody>
                </Card>
                <Card 
                    alignItems='center'                 
                    bgGradient={`linear(to-bl, ${theme.colors.background} 50%, ${theme.colors.background2})`}
                    borderRadius='10px'
                    color='white'>
                    <CardHeader>
                        <Heading size='md'>PHP</Heading>
                    </CardHeader>
                    <CardBody>
                        <Image src='../assets/skills/rsz_21php-logosvg.png' />
                    </CardBody>
                </Card>
                <Card 
                    alignItems='center'                 
                    bgGradient={`linear(to-bl, ${theme.colors.background} 50%, ${theme.colors.background2})`}
                    borderRadius='10px'
                    color='white'>
                    <CardHeader>
                        <Heading size='md'>Laravel</Heading>
                    </CardHeader>
                    <CardBody>
                        <Image src='../assets/skills/rsz_311969px-laravelsvg.png' />
                    </CardBody>
                </Card>
                <Card 
                    alignItems='center'                 
                    bgGradient={`linear(to-bl, ${theme.colors.background} 50%, ${theme.colors.background2})`}
                    borderRadius='10px'
                    color='white'>
                    <CardHeader>
                        <Heading size='md'>Bootstrap</Heading>
                    </CardHeader>
                    <CardBody>
                        <Image src='../assets/skills/rsz_bootstrap_logosvg.png' />
                    </CardBody>
                </Card>
            </SimpleGrid>
            </Box>
            </Flex>
    </Box>
  )
}
