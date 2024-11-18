import React from 'react';
import { Box, Button, Heading } from '@chakra-ui/react';
import PhInterface from '@/images/smartPic.jpg';
import NavBar from './navBar'; // Import the NavBar
import './hero.css';

const Hero = () => {
  return (
    <>
      <Box
        bg="linear-gradient(135deg, #1E3A8A 30%, #2563EB 100%)" // Gradient background
        width="100%"
        height="750px"
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
          zIndex={2} // Place it above the overlay
          color={'white'}
          bg={'transparent'}
          transform={'translate(-50%, -50%)'}
          top={'50%'}
          left={'50%'}
          fontSize={'70px'}
          textAlign="center"
        >
          What's the Latest?
        </Heading>

        {/* Button */}
        <Button
          position={'absolute'}
          zIndex={2} // Place it above the overlay
          color={'white'}
          bg={'black'}
          transform={'translate(-50%, -50%)'}
          top={'62%'}
          left={'50%'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          borderWidth={4}
          borderRadius={20}
          padding={'25px 40px'}
          _hover={{
            background: 'linear-gradient(90deg, #4A90E2, #1E3A8A)', // Add a hover gradient
            color: 'white',
          }}
        >
          <Heading bg={'transparent'} fontSize={'40px'} margin={0}>
            Try Sukoon!
          </Heading>
        </Button>
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

