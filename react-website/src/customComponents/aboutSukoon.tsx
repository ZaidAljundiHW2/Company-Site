import { Box } from '@chakra-ui/react';
import AboutSukoonHero from './aboutSukoonHero'
import AboutSukoonInfo from './aboutSukoonInfo'
import AboutSukoonButtons from './aboutSukoonButtons'

const AboutSukoon = () => {
  return (
    <>
        <AboutSukoonHero />
        <AboutSukoonInfo />
        <AboutSukoonButtons />
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
