import { Box, 
    Text, 
    SimpleGrid,
    Flex,
    useMediaQuery,
    GridItem,
    Grid
} from '@chakra-ui/react'
import React from 'react'
import theme from './Chakra_theme'
import { CheckCircleIcon } from '@chakra-ui/icons'

function Skills() {
    const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex mt={isMobile ? '900px' : '200px'} id='skills' h='100vh' w='100%' flexDir='column' pl={4} pr={4}>
        <Flex alignItems='center' flexDir='column' mb={4}>
            <Text fontSize='3xl' mb={4}>Skills</Text>
            <Text fontSize={isMobile ? '2xl' : '3xl'}>I prefer the MERN stack, but these are the different programming languages I have been coding with</Text> 
        </Flex>
            <Grid gridTemplateColumns='1fr 1fr' gap='2rem'>
            <Box boxShadow='0px 10px 20px rgba(0, 0, 0, 0.5)'  borderRadius='2rem' overflow='hidden'>
                <Text fontSize={isMobile ? 'xl' : '3xl'} className='skills_dev'>Frontend development</Text>
                <SimpleGrid spacing={2} gridTemplateColumns={isMobile ? 'repeat(auto-fill, minmax(50px, 1fr))' : 'repeat(auto-fill, minmax(150px, 1fr))'} pl={2}>
                    <CheckCircleIcon boxSize={6} color={theme.colors.darkGreen}/>
                    <Text fontSize='xl'>HTML</Text>
                    <CheckCircleIcon boxSize={6} color={theme.colors.darkGreen}/>
                    <Text fontSize='xl'>CSS</Text>
                    <CheckCircleIcon boxSize={6} color={theme.colors.darkGreen}/>
                    <Text fontSize='xl'>JavaScript</Text>
                    <CheckCircleIcon boxSize={6} color={theme.colors.darkGreen}/>
                    <Text fontSize='xl'>Bootstrap</Text>
                    <CheckCircleIcon boxSize={6} color={theme.colors.darkGreen}/>
                    <Text fontSize='xl'>React</Text>
                    <CheckCircleIcon boxSize={6} color={theme.colors.darkGreen}/>
                    <Text fontSize='xl'>Vue</Text>
                </SimpleGrid>
            </Box>
            <Box boxShadow='0px 10px 20px rgba(0, 0, 0, 0.5)'  borderRadius='2rem' overflow='hidden'>
                <Text fontSize={isMobile ? 'xl' : '3xl'} className='skills_dev'>Backend development</Text>
                <SimpleGrid spacing={2} templateColumns={isMobile ? 'repeat(auto-fill, minmax(50px, 1fr))' : 'repeat(auto-fill, minmax(150px, 1fr))'} pb={4} pl={2}>
                        <CheckCircleIcon boxSize={6} color={theme.colors.darkGreen}/>
                        <Text fontSize='xl'>Express</Text>

                        <CheckCircleIcon boxSize={6} color={theme.colors.darkGreen}/>
                        <Text fontSize='xl'>NodeJs</Text>

                        <CheckCircleIcon boxSize={6} color={theme.colors.darkGreen}/>
                        <Text fontSize='xl'>Laravel</Text>

                        <CheckCircleIcon boxSize={6} color={theme.colors.darkGreen}/>
                        <Text fontSize='xl'>PHP</Text>
    
                        <CheckCircleIcon boxSize={6} color={theme.colors.darkGreen}/>
                        <Text fontSize='xl'>MongoDB</Text>
    
                        <CheckCircleIcon boxSize={6} color={theme.colors.darkGreen}/>
                        <Text fontSize='xl'>MySQL</Text>
    
                        <CheckCircleIcon boxSize={6} color={theme.colors.darkGreen}/>
                        <Text fontSize='xl'>TypeScript</Text>
    
                </SimpleGrid>
            </Box>
            </Grid>
    </Flex>
  );
};

export default Skills;