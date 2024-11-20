import { Box, Heading, Text, Flex } from '@chakra-ui/react';
import React from 'react';
import AboutUsPhoto from '@/images/aboutUsPhoto.png'
import AboutUs from '@/AboutUs';

const aboutUsMain = () => {
  return (
    <div>
      <Box width={'100%'} height={'1000px'} bg={'white'} p={{ base: '20px', md: '40px' }}>
        {/* Flex container to hold the two columns */}

        <Heading color={'black'} mb={{base: 50, md: 60, lg: 70}} fontSize={'300%'}>
              Our role in energy conservation.
        </Heading>

        <Flex 
          direction={{ base: 'column', md: 'row' }} 
          justify="center" 
          align="flex-start" 
          gap={{ base: '-120%', md: '-65%' }} 
        >

          {/* Left column */}
          <Box 
            flex="1" 
            textAlign="left" 
            marginLeft={{ base: '60px', md: '80px' }} 
            marginRight={{ base: '60px', md: '80px' }} 
          >

            <Box width={'100%'} height={'4px'} bg={'black'} mb={5}></Box>

            <Text color={'black'} mb={5} letterSpacing={'wider'}>
              Vektor Tech is a young and new institution that specialises in providing innovative solutions to various energy conservation related challenges. With a team composed of third year computer science students at Heriot-Watt University, the institute hopes to offer many services including a platform for smart home management and energy optimization in your very own home.

            </Text>

            <Text color={'black'} mb={5} letterSpacing={'wider'}>
              At Vektor Tech, we believe that the rise of renewable energy is gaining momentum, and we would like to offer our services to make the best of what humans can do to better the environment. Our team works closely with clients to understand their specific needs and develop custom platforms like our debut project "Sukoon" to deliver measurable results.

            </Text>

            <Text color={'black'} mb={10} letterSpacing={'wider'}>
              Our pursuit in mastering and applying the most functional and convenient energy management systems has led us to SUKOON as our main selling point. Our blend of strategic management and solution expertise with our small size has allowed us to create boutique and tailored services to our customers to achieve energy management.
            </Text>

            <Heading size="lg" mb={4} color={'black'}>Our Mission</Heading>
            <Text color={'black'} letterSpacing={'wider'} mb={5}>
              Vektor Tech is committed to revolutionizing the way we live by integrating cutting-edge
              technology with energy-efficient solutions. Our vision is to provide smarter homes for a 
              more sustainable future. We strive to empower individuals to reduce their environmental impact 
              while enjoying the comfort of advanced automation and intelligent systems.
            </Text>
          </Box>

          {/* Right column */}
          <Box 
            flex="1" 
            textAlign="left" 
            marginLeft={{ base: '40px', md: '80px' }} // Add left margin for larger screens
            marginRight={{ base: '40px', md: '80px' }} // Add right margin for larger screens
          >
            
            <Box width="100%" height="auto" mb={5} borderWidth={2} borderColor={'black'} borderRadius={8}>
              <img 
                src={AboutUsPhoto} 
                alt="About us photo" 
                style={{ width: '100%', height: 'auto', display: 'block' }} 
              />
            </Box>


            <Heading size="lg" mb={4} color={'black'}>Our Vision</Heading>
            <Text color={'black'} letterSpacing={'wider'}>
              At Vektor Tech, we believe that the future of energy conservation lies in the hands of every 
              homeowner. Our innovative products and solutions are designed to be accessible, intuitive, 
              and effective. Our goal is to create a sustainable world where energy is used more efficiently, 
              and waste is minimized, all while making it easier for homeowners to take control of their energy 
              usage.
            </Text>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default aboutUsMain;
