import React from 'react';
import { Box, Button, Heading, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import PhInterface from '@/images/smartPic.jpg';
import NavBar from './navBar'; // Import the NavBar
import './hero.css';

const Hero = () => {
  return (
    <>
      <Box
        bg="linear-gradient(135deg, #1E3A8A 30%, #2563EB 100%)" // Gradient background
        width="100%"
        height={{ base: '400px', md: '750px' }} // Adjust height for mobile screens
        position="relative"
        overflow="visible"
        boxSizing="border-box"
      >
        {/* NavBar inside Hero */}
        <NavBar />

        {/* Image Overlay */}
        <div
          className="image-container"
          style={{
            height: '100%',
            position: 'relative',
          }}
        >
          {/* Hero Image */}
          <img
            src={PhInterface}
            alt="placeholder interface show off"
            style={{
              objectFit: 'cover',
              display: 'block',
              width: '100%',
              height: '100%',
              filter: 'contrast(0.5) brightness(1)', // Image adjustments for better visibility
            }}
          />

          {/* Gradient Overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background:
                'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))', // Dark gradient fade at the top
              zIndex: 1,
            }}
          ></div>
        </div>

        {/* Heading */}
        <Heading
          position={'absolute'}
          zIndex={3} // Ensure heading stays above the buttons
          color={'white'}
          bg={'transparent'}
          transform={'translate(-50%, -50%)'}
          top={{ base: '30%', sm: '35%', md: '40%', lg: '45%' }} // Adjust top for different screen sizes
          left={'50%'}
          fontSize={{ base: '30px', sm: '40px', md: '50px', lg: '70px' }} // Responsive font size
          textAlign="center"
          lineHeight={{ base: '36px', sm: '45px', md: '55px', lg: '80px' }} // Adjust line height for better readability
        >
          What's the Latest?
        </Heading>

        {/* Buttons Container */}
        <Flex
          position={'absolute'}
          zIndex={2} // Ensure buttons stay below the heading
          top={{ base: '55%', sm: '60%', md: '70%' }} // Adjust top to reduce the space between text and buttons on mobile
          left={'50%'}
          transform={'translate(-50%, -50%)'}
          gap={{ base: 4, sm: 6, md: 8 }} // Adjust button gap for mobile
          justifyContent={'center'}
          alignItems={'center'}
          direction={{ base: 'column', sm: 'row', md: 'row' }} // Stack buttons on mobile
        >
          {/* Button 1 */}
          <Link to="/about-sukoon">
            <Button
              color={'white'}
              bg={'#0071e3'}
              borderWidth={2}
              borderRadius={20}
              padding={{ base: '15px 30px', md: '25px 40px' }} // Adjust padding for mobile
              width={{ base: '200px', md: '250px' }} // Adjust width for mobile
              borderColor={'#0071e3'}
              _hover={{
                background: 'linear-gradient(90deg, #4A90E2, #1E3A8A)',
                color: 'white',
              }}
            >
              <Heading bg={'transparent'} fontSize={{ base: '20px', md: '35px' }} margin={0}>
                Learn More
              </Heading>
            </Button>
          </Link>

          {/* Button 2 */}
          <Button
            color={'#0071e3'}
            bg={'transparent'}
            borderWidth={2}
            borderRadius={20}
            borderColor={'#0071e3'}
            padding={{ base: '15px 30px', md: '25px 40px' }} // Adjust padding for mobile
            width={{ base: '200px', md: '250px' }} // Adjust width for mobile
            _hover={{
              background: 'linear-gradient(90deg, #4A90E2, #1E3A8A)',
              color: 'white',
            }}
          >
            <Heading bg={'transparent'} fontSize={{ base: '20px', md: '40px' }} margin={0} fontWeight={100}>
              SUKOON
            </Heading>
          </Button>
        </Flex>
      </Box>

      {/* Divider Section */}
      <Box
        bg={'white'}
        width={'100%'}
        height={'15px'}
        overflowX={'hidden'}
        boxSizing={'border-box'}
      ></Box>
    </>
  );
};

export default Hero;


