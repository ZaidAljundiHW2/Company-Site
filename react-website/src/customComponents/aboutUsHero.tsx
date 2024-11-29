import { Box, Heading } from '@chakra-ui/react'

const aboutUsHero = () => {
  return (
    <div>
      <Box
      width="100%"
      height="450px"
      bg="linear-gradient(#28282B, #000000 100%)"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      >
        <Heading
          color="white"
          textAlign="center"
          mb={{ base: '70px', sm: '80px', md: '90px' }}
          fontSize={{ base: '200%', sm: '400%', md: '600%' }} // Adjusting font size for different screen sizes
        >
          Empowering Homes.
        </Heading>
        <Heading
          color="white"
          textAlign="center"
          fontSize={{ base: '200%', sm: '400%', md: '600%' }} // Adjusting font size for different screen sizes
        >
          Conserving Energy.
        </Heading>
      </Box>
      
      <Box width={'100%'} height={'20px'} bg={'black'}>

      </Box>
    </div>
  )
}

export default aboutUsHero
