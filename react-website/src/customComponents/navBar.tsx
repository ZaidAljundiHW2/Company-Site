import React, { useState, useEffect } from 'react';
import { Box, Heading, Flex, Button, VStack } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import CompanyLogo from '@/images/companyLogo.png';
import './navBar.css'; // Import the CSS for custom styles

interface NavBarProps {
  bgColor?: string;
}

const NavBar: React.FC<NavBarProps> = ({ bgColor = 'transparent' }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
      className="navShadow"
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
      <Flex
        align="center"
        gap={8}
        display={{ base: 'none', md: 'flex' }} // Hide on mobile, show on desktop
      >
        <ScrollLink to={'home'} smooth={true} duration={500} offset={-60} style={{ textDecoration: 'none' }}>
          <Heading color="white" fontSize={['sm', 'md', 'lg']} _hover={{ color: '#B0C4DE', cursor: "button" }}>
            Home
          </Heading>
        </ScrollLink>
        <ScrollLink to="aboutUs" smooth={true} duration={500} offset={-60} style={{ textDecoration: 'none' }}>
          <Heading color="white" fontSize={['sm', 'md', 'lg']} _hover={{ color: '#B0C4DE', cursor: "button" }}>
            About Us
          </Heading>
        </ScrollLink>
        <ScrollLink to="aboutSukoon" smooth={true} duration={500} offset={-60} style={{ textDecoration: 'none' }}>
          <Heading color="white" fontSize={['sm', 'md', 'lg']} _hover={{ color: '#B0C4DE', cursor: "button" }}>
            About Sukoon
          </Heading>
        </ScrollLink>
        <ScrollLink to="contactUs" smooth={true} duration={500} offset={-60} style={{ textDecoration: 'none' }}>
          <Heading color="white" fontSize={['sm', 'md', 'lg']} _hover={{ color: '#B0C4DE', cursor: "button" }}>
            Contact Us
          </Heading>
        </ScrollLink>
        <RouterLink to="/try-sukoon" style={{ textDecoration: 'none' }}>
          <Heading color="white" fontSize={['sm', 'md', 'lg']} _hover={{ color: '#B0C4DE', cursor: "button" }}>
            SUKOON
          </Heading>
        </RouterLink>
      </Flex>

      {/* Mobile Button with Hamburger Icon */}
      <Button
        display={{ base: 'block', md: 'none' }} // Show only on mobile
        onClick={() => setMenuOpen(!menuOpen)} // Toggle the menu
        color="white"
        fontSize="24px"
        variant="ghost"
        className={menuOpen ? 'hamburger-button open' : 'hamburger-button'} // Apply class for open state
        aria-label="Toggle Menu"
      >
        <div></div>
        <div></div>
        <div></div>
      </Button>

      {/* Mobile Menu */}
      {menuOpen && (
        <Box
          position="absolute"
          top="60px"
          left={0}
          width="100%"
          bg="rgba(0, 0, 0, 0.9)"
          display="flex"
          flexDirection="column"
          alignItems="center"
          p={4}
        >
          <VStack >
            <ScrollLink to={'home'} smooth={true} duration={500} offset={-60} style={{ textDecoration: 'none' }}>
              <Heading color="white" fontSize="lg" _hover={{ color: '#B0C4DE' }}>
                Home
              </Heading>
            </ScrollLink>
            <ScrollLink to="aboutUs" smooth={true} duration={500} offset={-60} style={{ textDecoration: 'none' }}>
              <Heading color="white" fontSize="lg" _hover={{ color: '#B0C4DE' }}>
                About Us
              </Heading>
            </ScrollLink>
            <ScrollLink to="aboutSukoon" smooth={true} duration={500} offset={-60} style={{ textDecoration: 'none' }}>
              <Heading color="white" fontSize="lg" _hover={{ color: '#B0C4DE' }}>
                About Sukoon
              </Heading>
            </ScrollLink>
            <ScrollLink to="contactUs" smooth={true} duration={500} offset={-60} style={{ textDecoration: 'none' }}>
              <Heading color="white" fontSize="lg" _hover={{ color: '#B0C4DE' }}>
                Contact Us
              </Heading>
            </ScrollLink>
            <RouterLink to="/try-sukoon" style={{ textDecoration: 'none' }}>
              <Heading color="white" fontSize="lg" _hover={{ color: '#B0C4DE' }}>
                SUKOON
              </Heading>
            </RouterLink>
          </VStack>
        </Box>
      )}
    </Box>
  );
};

export default NavBar;
