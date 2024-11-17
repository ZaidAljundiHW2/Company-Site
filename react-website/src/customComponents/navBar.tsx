import React, { useState, useEffect } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import CompanyLogo from '@/images/companyLogo.png';
import './navBar.css';

const navBar = () => {
  // State to track if the user has scrolled down
  const [scrolled, setScrolled] = useState(false);

  // useEffect to detect scroll events and update state
  useEffect(() => {
    const handleScroll = () => {

      if (window.scrollY > 50) {
        setScrolled(true); // Change state when scrolled past threshold
      } else {
        setScrolled(false); // Reset state when back to top
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      width="100%"
      height="60px"
      bg={scrolled ? "rgba(0, 0, 0, 0.8)" : "transparent"} // Change color based on scroll
      backdropFilter="blur(10px)"
      position="fixed"
      top={0}
      left={0}
      zIndex={10}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      px={6}
      shadow={scrolled ? "lg" : "none"} // Add shadow when scrolled
      transition="background-color 0.3s, box-shadow 0.3s" // Smooth transition
    >
      {/* Company Logo */}
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} backgroundColor={'transparent'} mr={4} ml={3}>
        <img
          src={CompanyLogo}
          alt="Company Logo"
          height={99}
          width={99}
          style={{
            backgroundColor: 'transparent',
            filter: 'brightness(1.5)',
          }}
        />
      </Box>

      {/* Company Name */}
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} backgroundColor={'transparent'}>
        <Heading
          color={'white'}
          backgroundColor={'transparent'}
          fontWeight={'bold'}
          fontSize={['lg', 'xl', '2xl']}
          textShadow={'none'}
        >
          Vector Tech
        </Heading>
      </Box>

      <Box flex={1} />

      {/* Nav Options */}
      <Box display={'flex'} flex={0.25} backgroundColor={'transparent'} justifyContent={'space-around'} alignItems={'center'} px={[2, 4, 2]}>
        <Heading
          color={'white'}
          backgroundColor={'transparent'}
          fontSize={['sm', 'md', 'lg']}
          _hover={{
            color: '#B0C4DE',
          }}
          textShadow={'none'}
        >
          About Us
        </Heading>
        <Heading
          color={'white'}
          backgroundColor={'transparent'}
          fontSize={['sm', 'md', 'lg']}
          _hover={{
            color: '#B0C4DE',
          }}
          textShadow={'none'}
        >
          About Sukoon
        </Heading>
      </Box>

      {/* Try Sukoon Button */}
      <Box
        display={'flex'}
        alignContent={'center'}
        justifyContent={'center'}
        borderRadius={8}
        width={[100, 120, 150]}
        bg={'transparent'}
        mr={[5, 8, 10]}
        px={[3, 4, 6]}
        _hover={{
          backgroundColor: '#1E3A8A',
          transform: 'scale(1.05)',
        }}
      >
        <Heading
          color={'white'}
          display={'flex'}
          backgroundColor={'transparent'}
          fontSize={['xs', 'sm', 'md']}
          textShadow={'none'}
        >
          Try Sukoon!
        </Heading>
      </Box>
    </Box>
  );
};

export default navBar;
