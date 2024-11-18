import React from 'react';
import { Box, Heading, Text, Image, VStack, Flex } from '@chakra-ui/react';
import NavBar from './customComponents/navBar'; // Import the NavBar
import animationGif from '@/images/animation.gif';
import './AboutUs.css';  // Import the CSS file

const AboutUs: React.FC = () => {
  return (
    <div>
      <NavBar bgColor="black" /> {/* Black navbar for About Us page */}

      {/* Main Content Section */}
      <Box className="about-us-container">
        {/* About Us Content */}
        <Box className="about-us-content">
          <Flex
            direction={['column', 'row']}
            justify="center"
            align="center"
            gap={10}
            padding="40px"
            maxW="1200px"
            mx="auto"
          >
            {/* Left Side - Image */}
            <Box flex={1} display="flex" justifyContent="flex-start" alignItems="center">
              <Image
                src={animationGif}
                alt="Smart Home Animation"
                maxW="400px"
                maxH="400px"
                borderRadius="md"
                shadow="lg"
              />
            </Box>

            {/* Right Side - Text Content */}
            <VStack align="flex-start" flex={1}>
              <Heading as="h2" size="xl" className="about-us-heading">
                About Us
              </Heading>
              <Text className="about-us-description">
                Vector Tech is committed to revolutionizing the way we live with cutting-edge smart home technologies.
                Our vision is to make every home intelligent, efficient, and secure for a better tomorrow.
              </Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
    </div>
  );
};

export default AboutUs;

