import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import NavBar from './customComponents/navBar'; // Import the NavBar for consistent layout

const TrySukoon: React.FC = () => {
  return (
    <div>
      <NavBar bgColor="black" /> {/* Reuse NavBar for navigation */}
      <Box p={8} textAlign="center">
        <Heading as="h1" size="xl" mb={4}>
          Try Sukoon
        </Heading>
        <Text fontSize="lg" mb={6}>
          Discover the revolutionary features of Sukoon and bring peace and intelligence to your home.
        </Text>
        <Button colorScheme="teal" size="lg">
          Get Started
        </Button>
      </Box>
    </div>
  );
};

export default TrySukoon;