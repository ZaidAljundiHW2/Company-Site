import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import CompanyLogo from '@/images/companyLogo.png'
import './navBar.css'

const NavBar = () => {
  return (
    <div>

        <Box 
        bg= {"blue.600"}
        color= {"white"}
        px={4}
        py={2.5}
        position= {'relative'}
        display={'flex'}
        border={2}
        borderColor={'black'}
        borderWidth={2}
        background = {'linear-gradient(white 80%, black)'}
        top = {0}
        left = {0}
        right = {0}
        bottom = {0}
        zIndex={1}
        transform={'transform(10px, 8px)'}
        justifyContent={'center'}
        alignContent={'center'}
        alignItems={'center'}
        >
        

          {/* Company Logo */}
          <Box display={'static'} justifyContent={'center'} alignContent={'center'} alignItems={'center'} backgroundColor={'transparent'} mr={4}>
              <img src= {CompanyLogo} alt = "Company Logo" height = {35} width = {35} style = {{backgroundColor: 'transparent'}}></img>
          </Box>

          {/* Company Name */}
          <Box display={'static'} justifyContent={'center'} alignContent={'center'} alignItems={'center'} paddingLeft={2} backgroundColor={'transparent'}>
              <Heading color={'black'} backgroundColor={'transparent'}>
                Vector Tech
              </Heading>
          </Box>

          <Box flex={1}/>

          {/* Options */}
          <Box display={'flex'} flex ={.3} backgroundColor={'transparent'} justifyContent={'space-evenly'} alignItems={'center'}>
            <Heading color={'black'} backgroundColor={'transparent'}>
              About Us
            </Heading>
            <Heading color={'black'} backgroundColor={'transparent'}>
              About Sukoon
            </Heading>
          </Box>

          <Box display={'flex'} alignContent={'center'} justifyContent={'center'} borderRadius = {8} width = {150} bg={'black'} >
            <Heading color={'white'} display = {'flex'} backgroundColor={'black'}>
              Try Sukoon!
            </Heading>
          </Box>

        </Box>
      
    </div>
  )
}

export default NavBar
