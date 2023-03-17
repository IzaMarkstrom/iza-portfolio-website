import React, { useState, useEffect } from 'react';
import { Box, Flex, Text, Button, Spacer } from "@chakra-ui/react";
import theme from './Chakra_theme';

function Navbar() {
  const [showBorder, setShowBorder] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 100;
      setShowBorder(!isTop);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Flex
      position="fixed"
      top={0}
      left={0}
      right={0}
      p={4}
      align="center"
      borderBottomWidth="1px"
      borderBottomColor="black"
      backgroundColor="rgba(37, 59, 71, 0.9)"
      boxShadow={showBorder ? '0 8px 16px rgba(0, 0, 1, 1)' : 'none'}
      zIndex={1}
    >
      <Box>
        <Text color="white" fontWeight="bold">My Portfolio</Text>
      </Box>
      <Spacer />
      <Box>
        <Button
            variant='solid' 
            bgGradient={`linear(to-r, #7928CA, #FF0080)`} 
            color='white'
            _hover={{boxShadow: `0 0 20px 3px ${theme.colors.blue}`}} mr={4}>HOME</Button>
        <Button
            variant='solid' 
            bgGradient={`linear(to-r, #7928CA, #FF0080)`} 
            color='white'
            _hover={{boxShadow: `0 0 20px 3px ${theme.colors.blue}`}} mr={4}>ABOUT</Button>
        <Button
            variant='solid' 
            bgGradient={`linear(to-r, #7928CA, #FF0080)`} 
            color='white'
            _hover={{boxShadow: `0 0 20px 3px ${theme.colors.blue}`}} mr={4}>PROJECTS</Button>
        <Button
            variant='solid' 
            bgGradient={`linear(to-r, #7928CA, #FF0080)`} 
            color='white'
            _hover={{boxShadow: `0 0 20px 3px ${theme.colors.blue}`}} mr={4}>SKILLS</Button>
        <Button
            variant='solid' 
            bgGradient={`linear(to-r, #7928CA, #FF0080)`} 
            color='white'
            _hover={{boxShadow: `0 0 20px 3px ${theme.colors.blue}`}} mr={4}>CONTACT</Button>
      </Box>
    </Flex>
  );
}

export default Navbar;
