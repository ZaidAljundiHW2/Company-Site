import { Box, Flex, Heading } from '@chakra-ui/react';
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
        className='aboutUsFlexContainers'
        
        >
            
            <Box
            className='aboutUsImageContainer'
            >
                <img src={RoomLayout} alt="room layout image" className='aboutUsImages'/>

            </Box>

            <Box 
            className='aboutUsHeadingContainer'
            >
                <Heading 
                className="aboutUsHeaders"
                >
                    Organise devices into rooms! 

                </Heading>
                <Heading className='aboutUsText' fontWeight='100'>
                    For your convenience, bring you the option to group different devices into different rooms for the sake of ease of management and proper knowledge of allocation. With "Rooms", you can now add or remove rooms, and allocate any device to any room of your choice. We will provide you with an accumulation of statistics for each room, and a tab specifically to view all devices.

                </Heading>
            </Box>

            <Box
            className='aboutUsPhoneImageContainer'
            >
                <img src={RoomLayout} alt="room layout image" className='aboutUsPhoneImages'/>

            </Box>
        </Flex>

        <Flex
        className='aboutUsFlexContainers'
        >

            <Box
            className='aboutUsHeadingContainer'
            >
                <Heading className="aboutUsHeaders">
                    Configure Devices Remotely!

                </Heading>

                <Heading className='aboutUsText' letterSpacing={'wider'}>
                    Configure devices on the go! Upon accessing rooms, you can pick any device to configure. Upon selecting the device, you will be presented with a menu that allows you to modify the device's current state, and even schedule changes! Each device has customizable settings, which allow you to personalize their behavior to suit your needs! At the end of the day, it is all up to you; control your devices from anywhere, anyway, even if you're not physically in the room.

                </Heading>
            </Box>

            <Box
            className='aboutUsImageContainer'
            >
                <img src={DeviceConfig} alt="device config image" className='aboutUsImages'/>

            </Box>

            <Box
            className='aboutUsPhoneImageContainer'
            >
                <img src={DeviceConfig} alt="device config image" className='aboutUsPhoneImages'/>

            </Box>


        </Flex>

        <Flex
        className='aboutUsFlexContainers'
        >
            <Box
            className='aboutUsImageContainer'

            >
                <img src={ViewStats} alt="room layout image" className='aboutUsImages'/>

            </Box>

            <Box className='aboutUsHeadingContainer'>
                <Heading className='aboutUsHeaders'>
                    View your consumption statistics!

                </Heading>

                <Heading className='aboutUsText' letterSpacing={'wider'}>
                    To ensure you're in control, you can view the consumption statistics even down to specific devices whenever. Data is updated live throughout the day, and at the end of each day, you'll receive an aggregated overview of your consumption, with insights extending back over days, months, and even years. From graphs to tables to textual descriptions, data is presented in a very easy-to-understand way for all audiences!

                </Heading>
            </Box>

            <Box
            className='aboutUsPhoneImageContainer'

            >
                <img src={ViewStats} alt="stats image" className='aboutUsPhoneImages'/>

            </Box>
        </Flex>

        <Flex
        className='aboutUsFlexContainers'
        >
            

            <Box className='aboutUsHeadingContainer'>
                <Heading className='aboutUsHeaders'>
                    Play our game in "Be'ati"!

                </Heading>

                <Heading className='aboutUsText' letterSpacing={'wider'}>
                    Introducing "Be'ati", our new game to make the process of energy conservation easier to swallow! Set goals for yourself, and unlock new plants to grow your garden! The more energy you save, the larger your garden grows, and the more milestone rewards you will receive. Compete with other players to climb up the leaderboard and improve energy saving habits in a fun and exciting way!

                </Heading>
            </Box>

            <Box
            className='aboutUsImageContainer'
            >
                <img src={Beati} alt="beati layout image" className='aboutUsImages'/>

            </Box>

            <Box
            className='aboutUsPhoneImageContainer'
            >
                <img src={Beati} alt="beati image" className='aboutUsPhoneImages'/>

            </Box>
        </Flex>

        <Flex
        className='aboutUsFlexContainers'
        >
            <Box
            className='aboutUsImageContainer'

            >
                <img src={CustomiseAccount} alt="customise profile image" className='aboutUsImages'/>

            </Box>

            <Box className='aboutUsHeadingContainer'>
                <Heading className='aboutUsHeaders'>
                    Customise Your Profile!

                </Heading>

                <Heading className='aboutUsText' letterSpacing={'wider'}>
                    Customise your profile! Our application is accessible to any and all audiences. Our application has compatibility for a wide range of common languages. You can customize the light mode for your own preferences, and can even increase or decrease text sizes to account for potential difficulty in reading. Enable high-contrast modes or screen reader support for users with visual impairments, and much more!

                </Heading>
            </Box>

            <Box
            className='aboutUsPhoneImageContainer'

            >
                <img src={CustomiseAccount} alt="customise profile image" className='aboutUsPhoneImages'/>

            </Box>
        </Flex>

        <Flex
        className='aboutUsFlexContainers'
        >
            

            <Box className='aboutUsHeadingContainer'>
                <Heading className='aboutUsHeaders'>
                    Chat with the "Energy Genie"!

                </Heading>

                <Heading className='aboutUsText' letterSpacing={'wider'}>
                    Introducing the "Energy Genie", our live chatbot who is ready to help you whenever you need! If you have any concerns to do with energy management, whether they are general enquiries or enquiries specific to your consumption, or if you would like to enquire about the application itself, "Energy Genie" will be your smart assistant to guide you through doubts!    
                </Heading>
            </Box>

            <Box
            className='aboutUsImageContainer'

            >
                <img src={Chatbot} alt="chatbot image" className='aboutUsImages'/>

            </Box>

            <Box
            className='aboutUsPhoneImageContainer'

            >
                <img src={Chatbot} alt="chatbot image" className='aboutUsPhoneImages'/>

            </Box>
        </Flex>



        
      </Box>
    </div>
  );
};

export default AboutSukoonInfo;
