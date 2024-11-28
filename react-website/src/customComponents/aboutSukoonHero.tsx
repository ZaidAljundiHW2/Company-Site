import React from 'react';
import AnimatedBackground from '@/images/AnimatedBackgroundSmoke.mp4';
import { Box, Heading } from '@chakra-ui/react';

const aboutSukoonHero = () => {
  return (
    <div>
      <Box
        position="relative"
        width="100%"
        height="100vh" // Full viewport height for responsiveness
        overflow="hidden"
        bg="transparent"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover', // Ensures video covers the background area
            zIndex: 1, // Places video behind other content
            filter: 'contrast(1) brightness(0.3) saturate(1.5) hue-rotate(220deg)',
          }}
        >
          <source src={AnimatedBackground} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content */}
        <Box
          position="relative"
          zIndex={2} // Ensures content is above the video
          color="white"
          textAlign="center"
          p={{ base: 4, md: 10 }} // Adjust padding for mobile and larger screens
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          w={{ base: '90%', md: '70%' }} // Responsive width for content
        >
          <Heading
            fontWeight={100}
            fontSize={{ base: '4rem', md: '8rem' }} // Smaller font size for mobile, large for desktop
            mb={{ base: 4, md: 6 }} // Adjust spacing for mobile
            lineHeight="1"
          >
            SUKOON
          </Heading>
          <Heading
            fontSize={{ base: '1.5rem', md: '2rem' }} // Smaller size for mobile, large for desktop
            lineHeight="1.2"
          >
            Your Journey Begins Here
          </Heading>
        </Box>
      </Box>
    </div>
  );
};

export default aboutSukoonHero;



