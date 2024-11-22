import React from 'react';
import { Box, Heading, Text, Button, Flex, IconButton } from '@chakra-ui/react';
import { CloseButton } from '@/components/ui/close-button';

interface AboutUsCardProps {
  onClose: () => void; // onClose is a function with no parameters and no return value
}

const AboutUsCard: React.FC<AboutUsCardProps> = ({ onClose }) => {
  return (
    <Box
      position="fixed"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      bg="black"
      color="white"
      width="60%"
      padding="60px"
      borderRadius="8px"
      zIndex="1000"
      boxShadow="0px 4px 8px rgba(0, 0, 0, 0.5)"
      alignContent={"center"}
      alignItems={"center"}
      justifyContent={"center"}
      display={'flex'}
      flexDir={'column'}
    >

      <CloseButton top={'-50%'} right={'-45%'} onClick={onClose}></CloseButton>

      <Heading mb={12} fontSize={'400%'} fontWeight={'200%'}>About Vektor Tech</Heading>
      <Box bg={'white'} width={'90%'} height={'2px'} mb={8}>

      </Box>
      {/* Columns Container */}
      <Flex justify="space-between" mb={4} gap={6} flexWrap={'wrap'} textAlign={'center'}>
        <Box flex="1">
          <Heading mb={6} fontSize={'200%'}>Our Mission</Heading>
          <Text fontSize={'120%'} letterSpacing={'wider'}>
            Vektor Tech is a young and new institution that specialises in providing innovative solutions to various energy conservation related challenges. With a team composed of third year computer science students at Heriot-Watt University, the institute hopes to offer many services including a platform for smart home management and energy optimization in your very own home.
          </Text>
        </Box>

        <Box flex="1">
          <Heading mb={6} fontSize={'200%'}>Our Values</Heading>
          <Text fontSize={'120%'} letterSpacing={'wider'}>
            At Vektor Tech, we believe that the rise of renewable energy is gaining momentum, and we would like to offer our services to make the best of what humans can do to better the environment. Our team works closely with clients to understand their specific needs and develop custom platforms like our debut project "Sukoon" to deliver measurable results.
          </Text>
        </Box>

        <Box flex="1">
          <Heading mb={6} fontSize={'200%'}>Our Vision</Heading>
          <Text fontSize={'120%'} letterSpacing={'wider'}>
              Vektor Tech is committed to revolutionizing the way we live by integrating cutting-edge
              technology with energy-efficient solutions. Our vision is to provide smarter homes for a 
              more sustainable future. We strive to empower individuals to reduce their environmental impact 
              while enjoying the comfort of advanced automation and intelligent systems.
          </Text>
        </Box>
      </Flex>

      <Box justifyContent={'center'} alignContent={'center'} alignItems={'center'} textAlign={'center'}>
        <Text fontSize={'120%'} letterSpacing={'wider'}>
          Our pursuit in mastering and applying the most functional and convenient energy management systems has led us to SUKOON as our main selling point. Our blend of strategic management and solution expertise with our small size has allowed us to create boutique and tailored services to our customers to achieve energy management.
        </Text>
      </Box>
    </Box>
  );
};

export default AboutUsCard;
