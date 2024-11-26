import React from 'react';
import AnimatedBackground from '@/images/AnimatedBackgroundSmoke.mp4';
import { Box } from '@chakra-ui/react';
import AboutSukoonHero from './aboutSukoonHero'
import AboutSukoonInfo from './aboutSukoonInfo'

const AboutSukoon = () => {
  return (
    <>
        <AboutSukoonHero />
        <AboutSukoonInfo />
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

export default AboutSukoon;
