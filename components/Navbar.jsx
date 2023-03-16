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
      bg={theme.colors.primary}
      p={4}
      align="center"
      borderBottom={showBorder ? '1px solid black' : 'none'}
      boxShadow={showBorder ? '0 8px 16px rgba(0, 0, 1, 1)' : 'none'}
      zIndex={1}
    >
      <Box>
        <Text color="white" fontWeight="bold">My Website</Text>
      </Box>
      <Spacer />
      <Box>
        <Button variant="ghost" color="white" mr={4}>Home</Button>
        <Button variant="ghost" color="white" mr={4}>About</Button>
        <Button variant="ghost" color="white" mr={4}>Projects</Button>
        <Button variant="ghost" color="white" mr={4}>Skills</Button>
        <Button variant="ghost" color="white" mr={4}>Contact</Button>
      </Box>
    </Flex>
  );
}

export default Navbar;
