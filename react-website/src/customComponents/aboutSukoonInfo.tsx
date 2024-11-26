import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import Beati from '@/images/aboutSukoonImages/beati.png'
import Chatbot from '@/images/aboutSukoonImages/chatbot.png'
import CustomiseAccount from '@/images/aboutSukoonImages/customiseAccount.png'
import DeviceConfig from '@/images/aboutSukoonImages/deviceConfig.png'
import RoomLayout from '@/images/aboutSukoonImages/roomLayout.png'
import ViewStats from '@/images/aboutSukoonImages/viewStats.png'
import './aboutSukoonInfo.css'

const AboutSukoonInfo = () => {
  return (
    <div>
      <Box
        width="100%"
        
        bg="#000000"
        display="flex"
        flexDirection="column"  // Ensure content is in column layout
        justifyContent="flex-start"  // Align items at the top of the box
        alignItems="center"  // Center the content horizontally
        textAlign="center"  // Center the text inside the Heading
        pt={10}  // Adjust padding-top to push text down a bit from the top
      >
        <Heading
          width="80%"
          color="white"  // Make the text visible on the dark background
          fontWeight="100"  // Adjust the font weight if needed
          mb={10}
        >
          Introducing Sukoon, your very own Smart Home Management Application. 
          Our aim with Sukoon is to combine remote access to different devices within your household, 
          and to advise you on smarter energy-related choices. You heard it right! Using different 
          arithmetic models that analyze your energy consumption trends, your application will be able to 
          speak to you and help you actively make better choices! With our all-new AI-powered chatbot assistant 
          the "Energy Genie", you can take it a step further and pose specific questions about your energy usage, 
          receive personalized tips, and even get real-time advice on how to optimize your energy consumption.
        </Heading>

        <Heading
          width="80%"
          color="white"  // Make the text visible on the dark background
          fontWeight="100"  // Adjust the font weight if needed
          mb={10}
        >
          Sukoon isn’t just about convenience; it’s about empowering you to create a smarter, more sustainable home. 
          Whether it’s managing your devices remotely, understanding your consumption patterns, or making eco-friendly 
          choices, Sukoon is here to make your life simpler, greener, and more efficient.

        </Heading>

        <Heading
          width="80%"
          color="white"  // Make the text visible on the dark background
          fontWeight="400"  // Adjust the font weight if needed
          mb={10}
          fontSize={'130%'}
        >
          Welcome to the future of smart home management— Welcome to Sukoon!

        </Heading>

        <Box
        width={'60%'}
        bg={'white'}
        height={'4px'}
        mb={100}
        >

        </Box>

        <Flex
        direction={{base: 'column', md: 'row'}}
        alignItems={'center'}
        mb={20}
        >
            <Box
            flex={1}

            >
                <img src={RoomLayout} alt="room layout image" className='aboutUsImages'/>

            </Box>

            <Box>
                <Heading>
                    Organise devices into rooms!

                </Heading>
            </Box>
        </Flex>

        <Flex
        direction={{base: 'column', md: 'row'}}
        alignItems={'center'}
        mb={20}
        >
            <Box
            flex={1}

            >
                <img src={DeviceConfig} alt="room layout image" className='aboutUsImages'/>

            </Box>

            <Box>
                <Heading>
                    Configure Devices Remotely!

                </Heading>
            </Box>
        </Flex>

        <Flex
        direction={{base: 'column', md: 'row'}}
        alignItems={'center'}
        mb={20}
        >
            <Box
            flex={1}

            >
                <img src={ViewStats} alt="room layout image" className='aboutUsImages'/>

            </Box>

            <Box>
                <Heading>
                    View your consumption statistics!

                </Heading>
            </Box>
        </Flex>

        <Flex
        direction={{base: 'column', md: 'row'}}
        alignItems={'center'}
        mb={20}
        >
            <Box
            flex={1}

            >
                <img src={Beati} alt="room layout image" className='aboutUsImages'/>

            </Box>

            <Box>
                <Heading>
                    Play our game in "Be'ati"!

                </Heading>
            </Box>
        </Flex>

        <Flex
        direction={{base: 'column', md: 'row'}}
        alignItems={'center'}
        mb={20}
        >
            <Box
            flex={1}

            >
                <img src={CustomiseAccount} alt="room layout image" className='aboutUsImages'/>

            </Box>

            <Box>
                <Heading>
                    Customise Your Profile!

                </Heading>
            </Box>
        </Flex>

        <Flex
        direction={{base: 'column', md: 'row'}}
        alignItems={'center'}
        mb={20}
        >
            <Box
            flex={1}

            >
                <img src={Chatbot} alt="room layout image" className='aboutUsImages'/>

            </Box>

            <Box>
                <Heading>
                    Chat with the "Energy Genie"!

                </Heading>
            </Box>
        </Flex>



        
      </Box>
    </div>
  );
};

export default AboutSukoonInfo;
