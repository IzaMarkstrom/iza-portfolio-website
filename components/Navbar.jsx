import React, { useState, useEffect } from 'react';
import { Box, Flex, Text, Image, Spacer, useMediaQuery, Menu, MenuButton, MenuItem, MenuList, IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import NextLink from "next/link"
import theme from './Chakra_theme';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Flex
      as="nav"
      position="fixed"
      bottom={0}
      p={2}
      // mt={4}
      w="100%"
      bgGradient={`linear(15deg, ${theme.colors.primary} 40%, ${theme.colors.darkGreen})`} 
      bg={isScrolled ? 'rgba(8, 57, 69, 0.4)' : 'linear(15deg, ${theme.colors.darkGreen} 50%, ${theme.colors.primary})'}
      boxShadow={isScrolled ? 'sm' : 'none'}
      transition="all 0.3s ease-in-out"
      zIndex={4}
    >
      <Flex>
        <NextLink href='https://github.com/IzaMarkstrom'>
          <Image src='../assets/github.png' alt='Github' w='40px' mr='10px' />
        </NextLink>
        <NextLink href='https://www.linkedin.com/in/iza-markstr%C3%B6m/'>
          <Image src='../assets/linkedin.png' alt='Github' w='40px' />
        </NextLink>
      </Flex>
      <Spacer />
      {isMobile ? (
        <Box>
            <Menu>
                <MenuButton
                    as={IconButton}
                    aria-label='Options'
                    icon={<HamburgerIcon />}
                    color='white'
                    variant='outline'
                    border='2px solid white'
                />
                <MenuList bg='rgba(255, 255, 255, 0.5)' >
                    <MenuItem 
                        bg={theme.colors.primary}
                        _hover={{bg:theme.colors.darkGreen, borderRadius:'1rem', color:'white'}} 
                        mr={4}
                        mb={1}
                        borderRadius='1rem'
                        >
                        <NextLink href='#home'>
                          HOME
                        </NextLink>
                    </MenuItem>
                    <MenuItem 
                        bg={theme.colors.primary}
                        _hover={{bg:theme.colors.darkGreen, borderRadius:'1rem', color:'white'}} 
                        mr={4}
                        mb={1}
                        borderRadius='1rem'
                        >
                        <NextLink href='#about'>
                          ABOUT
                        </NextLink>
                    </MenuItem>
                    <MenuItem 
                        bg={theme.colors.primary}
                        _hover={{bg:theme.colors.darkGreen, borderRadius:'1rem', color:'white'}} 
                        mr={4}
                        mb={1}
                        borderRadius='1rem'
                        >
                        <NextLink href='#projects'>
                          PROJECTS
                        </NextLink>
                    </MenuItem>
                    <MenuItem 
                        bg={theme.colors.primary}
                        _hover={{bg:theme.colors.darkGreen, borderRadius:'1rem', color:'white'}} 
                        mr={4}
                        mb={1}
                        borderRadius='1rem'
                        >
                        <NextLink href='#skills'>
                          SKILLS
                        </NextLink>
                    </MenuItem>
                    <MenuItem 
                        bg={theme.colors.primary}
                        _hover={{bg:theme.colors.darkGreen, borderRadius:'1rem', color:'white'}} 
                        mr={4}
                        mb={1}
                        borderRadius='1rem'
                        >
                        <NextLink href='#contact'>
                          CONTACT
                        </NextLink>
                    </MenuItem>
            </MenuList>
        </Menu>
    </Box>
      ) : (
        <Box mr='80px' mt={2}>
            <NextLink href='#home'>
              <Text as='b' color='white' fontSize='l' m={3} _hover={{color:'white'}}>HOME</Text>
            </NextLink>
            <NextLink href='#about'>
              <Text as='b' color='white' fontSize='l' m={3} _hover={{color:'white'}}>ABOUT</Text>
            </NextLink>
            <NextLink href='#projects'>
            <Text as='b' color='white' fontSize='l' m={3} _hover={{color:'white'}}>PROJECTS</Text>
            </NextLink>
            <NextLink href='#skills'>
            <Text as='b' color='white' fontSize='l' m={3} _hover={{color:'white'}}>SKILLS</Text>
            </NextLink>
            <NextLink href='#contact'>
            <Text as='b' color='white' fontSize='l' m={4} _hover={{color:'white'}}>CONTACT</Text>
            </NextLink>
        </Box>
      )}
    </Flex>
  );
}

export default Navbar;
