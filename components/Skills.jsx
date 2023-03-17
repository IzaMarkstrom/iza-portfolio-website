import { Box, 
    Text, 
    Image, 
    Card,
    Heading,
    CardBody,
    SimpleGrid,
    CardHeader
} from '@chakra-ui/react'
import React from 'react'
import theme from './Chakra_theme'

export const Skills = () => {
  return (
    <Box mt='200px'>
        <Text fontSize='3xl' mb={4}>Skills</Text>
            <Text mb={4}>I prefer the MERN stack, but these are the different programming languages I have been coding with</Text> 
            <Box>
                <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(150px, 1fr))'>
                <Card alignItems='center' bg={theme.colors.gray} boxShadow='0 0 10px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.1), 0 0 30px #FFFFFF'>
                    <CardHeader>
                        <Heading size='md'>HTML</Heading>
                    </CardHeader>
                    <CardBody>
                        <Image src='../assets/skills/html.png' />
                    </CardBody>
                </Card>
                <Card alignItems='center' bg={theme.colors.gray}>
                    <CardHeader>
                        <Heading size='md'>CSS</Heading>
                    </CardHeader>
                    <CardBody>
                        <Image src='../assets/skills/css.png' />
                    </CardBody>
                </Card>
                <Card alignItems='center' bg={theme.colors.gray}>
                    <CardHeader>
                        <Heading size='md'>JavaScript</Heading>
                    </CardHeader>
                    <CardBody>
                        <Image src='../assets/skills/javascript.png' />
                    </CardBody>
                </Card>
                <Card alignItems='center' bg={theme.colors.gray}>
                    <CardHeader>
                        <Heading size='md'>React</Heading>
                    </CardHeader>
                    <CardBody>
                        <Image src='../assets/skills/react.png' /> 
                    </CardBody>
                </Card>
                <Card alignItems='center' bg={theme.colors.gray}>
                    <CardHeader>
                        <Heading size='md'>Vue</Heading>
                    </CardHeader>
                    <CardBody>
                        <Image src='../assets/skills/rsz_1vuejs_logo_2svg.png' />
                    </CardBody>
                </Card>
                <Card alignItems='center' bg={theme.colors.gray}>
                    <CardHeader>
                        <Heading size='md'>Node</Heading>
                    </CardHeader>
                    <CardBody>
                        <Image src='../assets/skills/node.png' />
                    </CardBody>
                </Card>
                <Card alignItems='center' bg={theme.colors.gray}>
                    <CardHeader>
                        <Heading size='md'>MongoDB</Heading>
                    </CardHeader>
                    <CardBody>
                        <Image src='../assets/skills/mongo.png' />
                    </CardBody>
                </Card>
                <Card alignItems='center' bg={theme.colors.gray}>
                    <CardHeader>
                        <Heading size='md'>NextJs</Heading>
                    </CardHeader>
                    <CardBody>
                        <Image src='../assets/skills/nextjs.png' />
                    </CardBody>
                </Card>
                <Card alignItems='center' bg={theme.colors.gray}>
                    <CardHeader>
                        <Heading size='md'>PHP</Heading>
                    </CardHeader>
                    <CardBody>
                        <Image src='../assets/skills/rsz_21php-logosvg.png' />
                    </CardBody>
                </Card>
                <Card alignItems='center' bg={theme.colors.gray}>
                    <CardHeader>
                        <Heading size='md'>Laravel</Heading>
                    </CardHeader>
                    <CardBody>
                        <Image src='../assets/skills/rsz_311969px-laravelsvg.png' />
                    </CardBody>
                </Card>
                <Card alignItems='center' bg={theme.colors.gray}>
                    <CardHeader>
                        <Heading size='md'>Bootstrap</Heading>
                    </CardHeader>
                    <CardBody>
                        <Image src='../assets/skills/rsz_bootstrap_logosvg.png' />
                    </CardBody>
                </Card>
            </SimpleGrid>
            </Box>


            {/* <Grid templateColumns='repeat(3, 1fr)' gap={2} mr='100px' ml='100px'> */}
                {/* <GridItem w='100%'>
                    <Text >HTML</Text>
                    <Image src='../assets/skills/html.png' />
                </GridItem>
                <GridItem w='100%'>
                    <Text >CSS</Text>
                    <Image src='../assets/skills/css.png' />
                </GridItem>
                <GridItem w='100%'>
                    <Text >JavaScript</Text>
                    <Image src='../assets/skills/javascript.png' />
                </GridItem>
                <GridItem w='100%'>
                    <Text >React</Text>
                    <Image src='../assets/skills/react.png' /> 
                </GridItem>
                <GridItem w='100%'>
                    <Text >Vue</Text>
                    <Image src='../assets/skills/rsz_1vuejs_logo_2svg.png' />
                </GridItem>
                <GridItem w='100%' bg='papayawhip'>
                    <Text >NodeJs</Text>
                    <Image src='../assets/skills/node.png' />
                </GridItem>
                <GridItem w='100%'>
                    <Text >MongoDB</Text>
                    <Image src='../assets/skills/mongo.png' />
                </GridItem>
                <GridItem w='100%' bg='papayawhip'>
                    <Text >NextJs</Text>
                    <Image src='../assets/skills/nextjs.png' />
                </GridItem>
            </Grid> */}

        {/* <Flex flexDirection='row'>
            <Box flexDirection='column'>
                <Image src='../assets/skills/html.png' />
            </Box>
            <Box flexDirection='column '>
                <Image src='../assets/skills/css.png' />
            </Box>
            <Box flexDirection='column '>
                <Image src='../assets/skills/javascript.png' />
            </Box>
            <Box flexDirection='column '>
                <Image src='../assets/skills/react.png' />
            </Box>
            <Box flexDirection='column '>
                <Image src='../assets/skills/node.png' />
            </Box>
        </Flex>
        <Flex flexDirection='row'>
            <Box flexDirection='column '>
                <Image src='../assets/skills/mongo.png' />
            </Box>
            <Box flexDirection='column '>
                <Image src='../assets/skills/nextjs.png' />
            </Box>
            <Box flexDirection='column '>
                <Image src='../assets/skills/rsz_1vuejs_logo_2svg.png' />
            </Box>
            
        </Flex> */}
    </Box>
  )
}
