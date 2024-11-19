import { Box, Heading, Text, Flex } from '@chakra-ui/react';
import React from 'react';

const aboutUsMain = () => {
  return (
    <div>
      <Box width={'100%'} height={'800px'} bg={'orange'} p={{ base: '20px', md: '40px' }}>
        {/* Flex container to hold the two columns */}
        <Flex 
          direction={{ base: 'column', md: 'row' }} 
          justify="space-between" 
          align="flex-start" 
          gap={{ base: '20px', md: '50px' }} 
        >
          {/* Left column */}
          <Box 
            flex="1" 
            textAlign="left" 
            marginLeft={{ base: '0', md: '20px' }} 
            marginRight={{ base: '0', md: '20px' }} 
          >
            <Heading size="lg" mb={4}>Our Mission</Heading>
            <Text>
              Vektor Tech is committed to revolutionizing the way we live by integrating cutting-edge
              technology with energy-efficient solutions. Our vision is to provide smarter homes for a 
              more sustainable future. We strive to empower individuals to reduce their environmental impact 
              while enjoying the comfort of advanced automation and intelligent systems.
            </Text>
          </Box>

          {/* Right column */}
          <Box 
            flex="1" 
            textAlign="left" 
            marginLeft={{ base: '0', md: '20px' }} // Add left margin for larger screens
            marginRight={{ base: '0', md: '20px' }} // Add right margin for larger screens
          >
            <Heading size="lg" mb={4}>Our Vision</Heading>
            <Text>
              At Vektor Tech, we believe that the future of energy conservation lies in the hands of every 
              homeowner. Our innovative products and solutions are designed to be accessible, intuitive, 
              and effective. Our goal is to create a sustainable world where energy is used more efficiently, 
              and waste is minimized, all while making it easier for homeowners to take control of their energy 
              usage.
            </Text>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default aboutUsMain;
