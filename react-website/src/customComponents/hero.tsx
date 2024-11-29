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
        
        <Flex
          position='absolute'
          zIndex={2}
          top='50%'
          left='50%'
          transform='translate(-50%, -50%)'
          direction='column'
          align='center'
          justify='center'
          gap={{ base: 4, sm: 6, md: 8 }}
        >

        
          {/* Heading */}
          <Heading
            color={'white'}
            fontSize={{ base: '30px', sm: '40px', md: '50px', lg: '70px' }} // Responsive font size
            textAlign="center"
            lineHeight={{ base: '36px', sm: '45px', md: '55px', lg: '80px' }} // Adjust line height for better readability
          >
            What's the Latest?
          </Heading>

          {/* Buttons Container */}
          <Flex
            gap={{ base: 2, sm: 4, md: 6 }} // Adjust button gap for mobile
            direction={{ base: 'column', sm: 'row' }}
            justify={'center'}
            >
            {/* Button 1 */}
            <Link to="/about-sukoon">
              <Button
                color={'white'}
                bg={'#0071e3'}
                borderWidth={2}
                borderRadius={20}
                padding={{ base: '15px 30px', md: '25px 40px' }} // Adjust padding for mobile
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


