import { Box, 
    Text, 
    SimpleGrid,
    Flex,
    useMediaQuery,
    GridItem,
    Grid,
    Spacer
} from '@chakra-ui/react'
import React from 'react'
import theme from './Chakra_theme'
import { CheckCircleIcon } from '@chakra-ui/icons'

function Skills() {
    const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex mt={isMobile ? '900px' : '200px'} id='skills' h='100vh' w='100%' flexDir='column' pl={12} pr={12}>
        <Flex alignItems='center' flexDir='column' mb={4}>
            <Text 
                fontSize='3xl' 
                mb={10}
                color='white' 
                as='b'>
                    Skills
            </Text>

            <Text fontSize={isMobile ? 'xl' : '2xl'}>I prefer the MERN stack, but these are the different programming languages I have been coding with</Text> 
        </Flex>
            <Grid gridTemplateColumns='repeat(auto-fit, minmax(250px, 1fr))' gap='2rem'>
            <Box boxShadow='0px 10px 20px rgba(0, 0, 0, 0.5)' _hover={{bg: 'white'}} bg='rgb(220, 220, 220)' borderRadius='2rem' overflow='hidden' color='black'>
                <Text fontSize={isMobile ? 'xl' : '3xl'} className='skills_dev'>Frontend development</Text>
                <SimpleGrid spacing={2} pl={2} gridTemplateColumns={isMobile ? 'repeat(auto-fill, minmax(110px, 1fr))' : 'repeat(auto-fill, minmax(150px, 1fr))'} mb={5}>
    
                        <Text fontSize='xl'>
                            <CheckCircleIcon boxSize={6} color={theme.colors.primary} mr={4}/>
                            HTML
                        </Text>
    
                        <Text fontSize='xl'>
                            <CheckCircleIcon boxSize={6} color={theme.colors.primary} mr={4}/>
                            CSS
                        </Text>
    
                        <Text fontSize='xl'>
                            <CheckCircleIcon boxSize={6} color={theme.colors.primary} mr={4}/>
                            JavaScript
                        </Text>
    
                        <Text fontSize='xl'>
                            <CheckCircleIcon boxSize={6} color={theme.colors.primary} mr={4}/>
                            Bootstrap
                        </Text>
    
                        <Text fontSize='xl'>
                            <CheckCircleIcon boxSize={6} color={theme.colors.primary} mr={4}/>
                            React
                        </Text>
    
                        <Text fontSize='xl'>
                            <CheckCircleIcon boxSize={6} color={theme.colors.primary} mr={4}/>
                            Vue
                        </Text>
                </SimpleGrid>
            </Box>
            <Box boxShadow='0px 10px 20px rgba(0, 0, 0, 0.5)' _hover={{bg: 'white'}} bg='rgb(220, 220, 220)' borderRadius='2rem' overflow='hidden' color='black'>
                <Text fontSize={isMobile ? 'xl' : '3xl'} className='skills_dev'>Backend development</Text>
                <SimpleGrid spacing={2} templateColumns={isMobile ? 'repeat(auto-fill, minmax(110px, 1fr))' : 'repeat(auto-fill, minmax(150px, 1fr))'} pb={4} pl={2} mb={5}>
                        
                        <Text fontSize='xl'>
                            <CheckCircleIcon boxSize={6} color={theme.colors.primary} mr={4}/>
                            Express
                        </Text>

                        <Text fontSize='xl'>
                            <CheckCircleIcon boxSize={6} color={theme.colors.primary} mr={4}/>
                            NodeJs
                        </Text>

                        <Text fontSize='xl'>
                            <CheckCircleIcon boxSize={6} color={theme.colors.primary} mr={4}/>
                            Laravel
                        </Text>

                        <Text fontSize='xl'>
                            <CheckCircleIcon boxSize={6} color={theme.colors.primary} mr={4}/>
                            PHP
                        </Text>
    
                        <Text fontSize='xl'>
                            <CheckCircleIcon boxSize={6} color={theme.colors.primary} mr={4}/>
                            MongoDB
                        </Text>
    
                        <Text fontSize='xl'>
                            <CheckCircleIcon boxSize={6} color={theme.colors.primary} mr={4}/>
                            MySQL
                        </Text>
    
                        <Text fontSize='xl'>
                            <CheckCircleIcon boxSize={6} color={theme.colors.primary} mr={4}/>
                            TypeScript
                        </Text>
    
                </SimpleGrid>
            </Box>
            </Grid>
    </Flex>
  );
};

export default Skills;