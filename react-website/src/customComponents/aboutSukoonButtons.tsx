import { Button, Flex, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const aboutSukoonButtons = () => {
  return (
    <div>
      <Flex
        gap={{ base: 4, sm: 6, md: 8 }} // Increase button gap for larger spacing
        direction={{ base: 'column', sm: 'row' }}
        justify={'center'}
        bg={'#000000'}
        py={10}
      >
        {/* Button 1 */}
        <Link to="/about-sukoon">
          <Button
            color={'white'}
            bg={'#6a1932'}
            borderWidth={2}
            borderRadius={30} // Make border radius larger
            padding={{ base: '25px 50px', md: '35px 60px' }} // Increase padding for bigger buttons
            borderColor={'#6a1932'}
            _hover={{
              background: 'linear-gradient(90deg, #6a1932, #9c435e)',
              color: 'white',
            }}
          >
            <Heading bg={'transparent'} fontSize={{ base: '24px', md: '40px' }} margin={0}>
              DEMO SUKOON
            </Heading>
          </Button>
        </Link>

        {/* Button 2 */}
        <Button
          color={'#6a1932'}
          bg={'transparent'}
          borderWidth={2}
          borderRadius={30} // Make border radius larger
          borderColor={'#6a1932'}
          padding={{ base: '25px 50px', md: '35px 60px' }} // Increase padding for bigger buttons
          _hover={{
            background: 'linear-gradient(90deg, #6a1932, #9c435e)',
            color: 'white',
          }}
        >
          <Heading bg={'transparent'} fontSize={{ base: '24px', md: '45px' }} margin={0} fontWeight={100}>
            SUKOON
          </Heading>
        </Button>
      </Flex>
    </div>
  )
}

export default aboutSukoonButtons
