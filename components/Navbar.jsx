import React, { useState, useEffect } from 'react';
import { Box, Flex, Text, Button, Spacer, useMediaQuery, Menu, MenuButton, MenuItem, MenuList, IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
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
      top={0}
      p={4}
      w="100%"
      bg={isScrolled ? 'rgba(37, 59, 71, 0.9)' : 'transparent'}
      boxShadow={isScrolled ? 'sm' : 'none'}
      transition="all 0.3s ease-in-out"
      zIndex={1}
    >
      <Box>
        <Text color="white" fontWeight="bold" p={2}>My Portfolio</Text>
      </Box>
      <Spacer />
      {isMobile ? (
        <Box>
            <Menu>
                <MenuButton
                    as={IconButton}
                    aria-label='Options'
                    icon={<HamburgerIcon />}
                    variant='outline'
                />
                <MenuList bg='black'>
                    <MenuItem 
                        bg={theme.colors.background2}
                        _hover={{bg:theme.colors.primary, borderRadius:'30px'}} mr={4}
                        >
                    HOME
                    </MenuItem>
                    <MenuItem 
                        bg={theme.colors.background2}
                        _hover={{bg:theme.colors.primary, borderRadius:'30px'}} mr={4}
                        >
                    ABOUT
                    </MenuItem>
                    <MenuItem 
                        bg={theme.colors.background2}
                        _hover={{bg:theme.colors.primary, borderRadius:'30px'}} mr={4}
                        >
                    PROJECTS
                    </MenuItem>
                    <MenuItem 
                        bg={theme.colors.background2}
                        _hover={{bg:theme.colors.primary, borderRadius:'30px'}} mr={4}
                        >
                    SKILLS
                    </MenuItem>
                    <MenuItem 
                        bg={theme.colors.background2}
                        _hover={{bg:theme.colors.primary, borderRadius:'30px'}} mr={4}
                        >
                    CONTACT
                    </MenuItem>
            </MenuList>
        </Menu>
    </Box>
      ) : (
        <Box>
          <Button
            variant='solid' 
            bgGradient={`linear(to-r, ${theme.colors.primary}, ${theme.colors.blue})`} 
            color='white'
            borderRadius='50px'
            _hover={{boxShadow: `0 0 20px 3px ${theme.colors.blue}`}} mr={4}>HOME</Button>
          <Button
            variant='solid' 
            bgGradient={`linear(to-r, ${theme.colors.primary}, ${theme.colors.blue})`}  
            color='white'
            borderRadius='50px'
            _hover={{boxShadow: `0 0 20px 3px ${theme.colors.blue}`}} mr={4}>ABOUT</Button>
          <Button
            variant='solid' 
            bgGradient={`linear(to-r, ${theme.colors.primary}, ${theme.colors.blue})`}  
            color='white'
            borderRadius='50px'
            _hover={{boxShadow: `0 0 20px 3px ${theme.colors.blue}`}} mr={4}>PROJECTS</Button>
          <Button
            variant='solid' 
            bgGradient={`linear(to-r, ${theme.colors.primary}, ${theme.colors.blue})`}  
            color='white'
            borderRadius='50px'
            _hover={{boxShadow: `0 0 20px 3px ${theme.colors.blue}`}} mr={4}>SKILLS</Button>
          <Button
            variant='solid' 
            bgGradient={`linear(to-r, ${theme.colors.primary}, ${theme.colors.blue})`}  
            color='white'
            borderRadius='50px'
            _hover={{boxShadow: `0 0 20px 3px ${theme.colors.blue}`}} mr={4}>CONTACT</Button>
        </Box>
      )}
    </Flex>
  );
}

export default Navbar;
