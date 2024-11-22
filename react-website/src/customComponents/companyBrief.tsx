import React, { useState} from 'react';
import { Box, Heading, Button } from '@chakra-ui/react';
import './companyBrief.css';
import CompanyDiagram from '@/images/companyBriefDiagram.png';
import AboutUsCard from './aboutUsCard';

const CompanyBrief = () => {

  const [isCardVisible, setIsCardVisible] = useState(false);

  const showCard = () => {
    setIsCardVisible(true);
    console.log("card is now visible")
  }

  const closeCard = () => {
    setIsCardVisible(false);
    console.log("card is now visible")
  };

  return (
    <div>
      <Box
        width="100%"
        height="750px"
        overflow="hidden" // Prevents overflow
        boxSizing="border-box" // Ensures padding/border are included in the width
        // bg="linear-gradient(135deg, #1E3A8A 30%, #2563EB 100%)" // Adjusted background gradient to match website colors
        bg="linear-gradient(135deg, #28282B 50%, #000000 50%)" // Experimenting with different colours, not final colour scheme change.
        display="flex"
        flexDirection="column"
        position="relative"
      >
        <Heading
          bg="transparent"
          mt={{ base: '10%', md: '8%' }} // Adjust margin-top for smaller screens
          ml={{ base: '10%', md: '8%' }}
          fontWeight={100}
          fontSize={{ base: '125%', md: '175%' }} // Responsive font size
        >
          Live Peacefully with Nature and Technology.
        </Heading>

        <Heading
          bg="transparent"
          mt={{ base: '10%', md: '-8%' }} // Adjust margin-top for smaller screens
          ml={{ base: '10%', md: '0%' }}
          transform="translate(8%, 650%)"
          fontSize="250%"
        >
          Empowering Homes. Conserving Energy.
        </Heading>

        <Heading
          bg="transparent"
          mt="-120px"
          transform="translate(13%, 650%)"
        >
          Vektor Tech takes the lead in energy conservation innovations <br />
          and user convenience in controlling their home.
        </Heading>

        <Heading
          bg="transparent"
          mt="4px"
          transform="translate(13%, 265%)"
          fontWeight={100}
          wordBreak="break-word"
        >
          In a world where cleaner energy alternatives are bleak but gaining
          momentum, <br />
          Vektor Tech shines as a driving force for this movement towards a more
          sustainable <br />
          future. Debuting with "Sukoon", Vektor Tech aims to seamlessly blend user
          <br />
          convenience and comfortability with energy conservation and the
          reduction of <br />
          energy waste. Vektor Tech is here to help you live better — for both
          you and the planet.
        </Heading>

        <Button
          bg="transparent"
          width="7%"
          transform="translate(120%, 1100%)"
          borderWidth={1}
          borderRadius={8}
          borderColor="#0071e3"
          color="#0071e3"
          _hover={{ bg: '#0071e3', color: 'white' }}
          onClick={showCard}
        >
          Learn More
        </Button>

        {/* Center the image vertically */}
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(5%, -50%)"
          display="flex"
          justifyContent="center"
          alignItems="center"
          background={'transparent'}
          width={{ base: '90%', md: '75%' }}
        >
          <img
            src={CompanyDiagram}
            alt="company diagram"
            style={{
              objectFit: 'cover',
              background: 'transparent',
              width: '75%',
            }}
          />
        </Box>
      </Box>

      <Box
        bg="white"
        width="100%"
        height="15px"
        overflowX="hidden"
        boxSizing="border-box"
      ></Box>

      {/* Dimming effect for background */}
      {isCardVisible && (
        <Box
          position="fixed"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bg="rgba(0, 0, 0, 0.5)" // Semi-transparent overlay
          zIndex="999"
        />
      )}

      {/* Show the About Us card when the state is true */}
      {isCardVisible && <AboutUsCard onClose={closeCard} />}
    </div>
  );
};

export default CompanyBrief;


