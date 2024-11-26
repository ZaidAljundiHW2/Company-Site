import React from 'react'
import AnimatedBackground from '@/images/AnimatedBackgroundSmoke.mp4';
import { Box, Heading } from '@chakra-ui/react';

const aboutSukoonHero = () => {
  return (
    <div>
        <Box
      position="relative"
      width="100%"
      height="800px" /* Full viewport height */
      overflow="hidden" /* Ensures no overflow outside the container */
      bg={'transparent'}
      justifyContent={'center'}
      alignContent={'center'}
      alignItems={'center'}
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
          objectFit: 'cover', /* Ensures video covers the background area */
          zIndex: 1, /* Places video behind other content */
          filter: 'contrast(1) brightness(.3) saturate(1.5) hue-rotate(220deg)',
        }}
      >
        <source src={AnimatedBackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <Box
        position="relative"
        zIndex={1} /* Ensures content is above the video */
        color="white"
        textAlign="center"
        p={10}
        display={'flex'}
        flexDir={'column'}
      >
        <Heading fontWeight={100} fontSize={'800%'} mb={70}>
            SUKOON
        </Heading>
        <Heading fontSize={'200%'}>
            Your Journey Begins Here
        </Heading>
      </Box>
    </Box>
      
    </div>
  )
}

export default aboutSukoonHero
