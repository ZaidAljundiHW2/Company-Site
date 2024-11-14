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
        >
        

          {/* Company Logo */}
          <Box display={'flex'} justifyContent={'center'} alignContent={'center'} alignItems={'center'} backgroundColor={'transparent'}>
              <img src= {CompanyLogo} alt = "Company Logo" height = {35} width = {35} style = {{backgroundColor: 'transparent'}}></img>
          </Box>

          {/* Company Name */}
          <Box className = 'navBox' flex = {.1} display={'flex'} justifyContent={'center'} alignContent={'center'} alignItems={'center'} paddingLeft={2} backgroundColor={'transparent'}>
              <Heading color={'black'} backgroundColor={'transparent'}>
                Vector Tech
              </Heading>
          </Box>


          {/* Options */}

          <Box className = 'navBox' flex = {.1} ml = {'auto'} backgroundColor={'transparent'}>
            <Heading color={'black'} backgroundColor={'transparent'}>
              About Us
            </Heading>
          </Box>

          <Box className = 'navBox' paddingRight={6} backgroundColor={'transparent'}>
            <Heading backgroundColor={'transparent'}>
              About Sukoon
            </Heading>
          </Box>

          <Box display={'flex'} alignContent={'center'} justifyContent={'center'} borderRadius = {8} width = {150} bg='black'>
            <Heading color={'white'} display = {'flex'} backgroundColor={'black'}>
              Try Sukoon!
            </Heading>
          </Box>


        </Box>
      
    </div>
  )
}

export default NavBar
