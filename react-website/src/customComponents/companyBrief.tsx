import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import './companyBrief.css';

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
        
      >
        
        <Heading bg={'transparent'} transform={'translate(15%, 650%)'} fontWeight={100}>
          Live Peacefully with Nature and Technology.
        </Heading>

        <Heading bg={'transparent'} mt={'40px'} transform={'translate(15%, 650%)'} fontSize={'250%'}>
          Empowering Homes. Conserving Energy.
        </Heading>

        <Heading bg={'transparent'} mt={'-120px'} transform={'translate(20%, 650%)'}>
          Vektor Tech takes the lead in energy conservation innovations <br /> and user convenience in controlling their home.
        </Heading>

        <Heading bg={'transparent'} mt={'5px'} transform={'translate(20%, 650%)'} fontWeight={100}>
          Vektor Tech takes the lead in energy conservation innovations <br /> and user convenience in controlling their home.
        </Heading>


      </Box>
    </div>
  );
};

export default CompanyBrief;
