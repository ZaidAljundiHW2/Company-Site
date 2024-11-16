import React from 'react';
import { Box, Heading, Button } from '@chakra-ui/react';
import './companyBrief.css';
import CompanyDiagram from '@/images/companyBriefDiagram.png'

const CompanyBrief = () => {
  return (
    <div>
      <Box
        width={'100%'}
        height={'750px'}
        overflowX={'hidden'}  // Prevents overflow
        boxSizing={'border-box'} // Ensures padding/border are included in the width
        bg={'linear-gradient(90deg, rgb(130, 110, 166), rgb(156, 76, 76))'}
        display={'flex'}
        flexDirection={'column'}
        position={'relative'}
        overflow={'hidden'}
        
      >
        
        <Heading bg={'transparent'} transform={'translate(15%, 650%)'} fontWeight={100} fontSize={'175%'}>
          Live Peacefully with Nature and Technology.
        </Heading>

        <Heading bg={'transparent'} mt={'40px'} transform={'translate(15%, 650%)'} fontSize={'250%'}>
          Empowering Homes. Conserving Energy.
        </Heading>

        <Heading bg={'transparent'} mt={'-120px'} transform={'translate(20%, 650%)'}>
          Vektor Tech takes the lead in energy conservation innovations <br /> and user convenience in controlling their home.
        </Heading>

        <Heading bg={'transparent'} mt={'4px'} transform={'translate(20%, 265%)'} fontWeight={100} wordBreak={'break-word'}>
          In a world where cleaner energy alternatives are bleak but gaining momentum, <br /> 
          Vektor Tech shines as a driving force for this movement towards a more sustainable <br />
          future. Debuting with "Sukoon", Vektor Tech aims to seamlessly blend user <br />
          convenience and comfortability with energy conservation and the reduction of <br />
          energy waste. Vektor Tech is here to help you live better — for both you and the planet.
        </Heading>

        <Button bg={'transparent'} width={'7%'} transform={'translate(250%, 1100%)'} borderWidth={1} borderRadius={8} borderColor={'red.700'} color={'red.900'} _hover={{bg: 'red.700', color: 'white'}}>
          About us
        </Button>

        <img src={CompanyDiagram} alt='company diagram' style={{objectFit: 'cover', background: 'transparent', transform: 'translate(200%, -30%)'}} width={'30%'}></img>

      </Box>

      <Box bg={'white'} width={'100%'} height={'15px'} overflowX={'hidden'} boxSizing={'border-box'} >

      </Box>
    </div>
  );
};

export default CompanyBrief;
