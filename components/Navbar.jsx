import React, { useState, useEffect } from 'react';
import { Box, Flex, Text, Button, Spacer } from "@chakra-ui/react";
import theme from './Chakra_theme';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

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
      <Box>
        <Button
            variant='solid' 
            bgGradient={`linear(to-r, ${theme.colors.primary}, ${theme.colors.blue})`} 
            color='white'
            _hover={{boxShadow: `0 0 20px 3px ${theme.colors.blue}`}} mr={4}>HOME</Button>
        <Button
            variant='solid' 
            bgGradient={`linear(to-r, ${theme.colors.primary}, ${theme.colors.blue})`}  
            color='white'
            _hover={{boxShadow: `0 0 20px 3px ${theme.colors.blue}`}} mr={4}>ABOUT</Button>
        <Button
            variant='solid' 
            bgGradient={`linear(to-r, ${theme.colors.primary}, ${theme.colors.blue})`}  
            color='white'
            _hover={{boxShadow: `0 0 20px 3px ${theme.colors.blue}`}} mr={4}>PROJECTS</Button>
        <Button
            variant='solid' 
            bgGradient={`linear(to-r, ${theme.colors.primary}, ${theme.colors.blue})`}  
            color='white'
            _hover={{boxShadow: `0 0 20px 3px ${theme.colors.blue}`}} mr={4}>SKILLS</Button>
        <Button
            variant='solid' 
            bgGradient={`linear(to-r, ${theme.colors.primary}, ${theme.colors.blue})`}  
            color='white'
            _hover={{boxShadow: `0 0 20px 3px ${theme.colors.blue}`}} mr={4}>CONTACT</Button>
      </Box>
    </Flex>
  );
}

export default Navbar;
