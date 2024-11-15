import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const CompanyBrief = () => {
  return (
    <div>
      <Box
        position={'relative'}
        display={'flex'}
      >
        <Box
          width={'50vw'}
          height={'500px'}
          bg={'blue'}
          p={6} // Added padding for spacing
        >
          <Heading
            bg={'transparent'}
            fontSize={33}
            mb={4} // Margin bottom for spacing
          >
            Our Aims and Objectives
          </Heading>

          <Text bg={'transparent'} position={'static'}>
            placeholder text for brief company decsription
          </Text>
        </Box>

        <Box
          width={'50vw'}
          height={'500px'}
          bg={'purple'}
          display={'flex'}
          flex={1}
          mr={'auto'}
        >
          {/* Some image corresponding to the company */}
        </Box>
      </Box>
    </div>
  );
};

export default CompanyBrief;
