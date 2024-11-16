import React from 'react';
import { Box, Button, Heading } from '@chakra-ui/react';
import PhInterface from '@/images/placeHolderInterface.jpg';
import './hero.css'

const Hero = () => {
  return (
    <>
    <Box
      bg="orange"
      width="100%" 
      height="750px" 
      position="relative"
      overflow="visible" 
      background={'blue'}
      overflowX={'hidden'}
      boxSizing={'border-box'} 
    >

      <div
      className='image-container'
      style={{
        height: '100%', 
        background: 'blue',
        
      }}>
        <img
          src={PhInterface}
          alt="placeholder interface show off"
          style={{
            objectFit: 'cover', 
            display: 'block',
            width: '100%', 
            height: '100%', 
            filter: 'contrast(.3) brightness(.4)',
            background: 'blue', 
          }}
        />

      </div>
      

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
    <Box bg={'white'} width={'100%'} height={'15px'} overflowX={'hidden'} boxSizing={'border-box'} >

    </Box>
    </>
  );
};

export default Hero;
