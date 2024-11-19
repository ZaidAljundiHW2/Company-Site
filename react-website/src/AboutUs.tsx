import React from 'react';
import { Box, Heading, Text, VStack, Flex } from '@chakra-ui/react';
import NavBar from './customComponents/navBar'; // Import the NavBar
import AboutUsHero from './customComponents/aboutUsHero';
import './AboutUs.css'; // Import the CSS file
import AboutUsMain from './customComponents/aboutUsMain';

const AboutUs: React.FC = () => {
  return (
    <div>
      <NavBar bgColor="black" /> {/* Black navbar for About Us page */}

      <AboutUsHero/>
      <AboutUsMain/>



      {/* Main Content Section
      <Box className="about-us-container"> */}
        {/* About Us Content */}
        {/* <Box className="about-us-content">
          <Flex
            direction="column"
            justify="center"
            align="center"
            padding="40px"
            maxW="1200px"
            mx="auto"
          > */}
            {/* Text Content Only */}
            {/* <VStack align="flex-start">
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
      </Box> */}
    </div>
  );
};

export default AboutUs;


