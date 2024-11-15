import React from 'react';
import { Box, Button, Heading } from '@chakra-ui/react';
import PhInterface from '@/images/placeHolderInterface.jpg';

const Hero = () => {
  return (
    <>
    <Box
      bg="orange"
      width="100vw" 
      height="750px" 
      position="relative"
      overflow="hidden" 
    >
      <img
        src={PhInterface}
        alt="placeholder interface show off"
        style={{
          objectFit: 'cover', 
          width: '100%', 
          height: '100%', 
          filter: 'contrast(.5) brightness(.5)', 
        }}
      />

      <Heading 
        position={'absolute'} 
        zIndex={1} color={'white'} 
        bg={'transparent'} 
        transform={'translate(-50%, -50%)'} 
        top={'50%'} 
        left={'50%'} 
        fontSize={'70px'}>

        What's the Latest?
      </Heading>
      <Button 
        position={'absolute'} 
        zIndex={1} 
        color={'white'} 
        bg={'black'} 
        transform={'translate(-50%, -50%)'} 
        top={'62%'} 
        left={'50%'} 
        justifyContent={'center'} 
        alignContent={'center'}
        alignItems={'center'} 
        borderWidth={30}
        borderRadius={20}>
        <Heading bg={'transparent'} fontSize={'40px'}>
          Try Sukoon!
        </Heading>
        
      </Button>
    </Box>
    <Box bg={'white'} width={'100vw'} height={'15px'}>

    </Box>
    </>
  );
};

export default Hero;
