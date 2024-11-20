import React, { useState, useEffect } from 'react';
import { Box, Heading, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import CompanyLogo from '@/images/companyLogo.png';
import './navBar.css';

interface NavBarProps {
  bgColor?: string; // Accept bgColor prop to change navbar background dynamically
}

const NavBar: React.FC<NavBarProps> = ({ bgColor = 'transparent' }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      width="100%"
      height="60px"
      bg={scrolled ? 'rgba(0, 0, 0, 0.8)' : bgColor}
      backdropFilter="blur(10px)"
      position="fixed"
      top={0}
      left={0}
      zIndex={10}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      px={6}
      shadow={scrolled ? 'lg' : 'none'}
      transition="background-color 0.3s, box-shadow 0.3s"
    >
      {/* Left Section: Logo and Company Name */}
      <Flex align="center" gap={3}>
        <img
          src={CompanyLogo}
          alt="Company Logo"
          height={40}
          width={40}
          style={{
            filter: 'brightness(1.5)',
          }}
        />
        <Heading
          color="white"
          fontWeight="bold"
          fontSize={['md', 'lg', 'xl']}
          textShadow="none"
        >
          Vector Tech
        </Heading>
      </Flex>

      {/* Right Section: Navigation Links */}
      <Flex align="center" gap={8}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Heading
            color="white"
            fontSize={['sm', 'md', 'lg']}
            _hover={{ color: '#B0C4DE' }}
          >
            Home
          </Heading>
        </Link>
        <Link to="/about-us" style={{ textDecoration: 'none' }}>
          <Heading
            color="white"
            fontSize={['sm', 'md', 'lg']}
            _hover={{ color: '#B0C4DE' }}
          >
            About Us
          </Heading>
        </Link>
        <Link to="/about-sukoon" style={{ textDecoration: 'none' }}>
          <Heading
            color="white"
            fontSize={['sm', 'md', 'lg']}
            _hover={{ color: '#B0C4DE' }}
          >
            About Sukoon
          </Heading>
        </Link>
        <Link to="/try-sukoon" style={{ textDecoration: 'none' }}>
          <Heading
            color="white"
            fontSize={['sm', 'md', 'lg']}
            _hover={{ color: '#B0C4DE' }}
          >
            SUKOON
          </Heading>
        </Link>
      </Flex>
    </Box>
  );
};

export default NavBar;
