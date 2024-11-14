import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import PhInterface from '@/images/placeHolderInterface.jpg'

const hero = () => {
  return (
    <div>
      <Box bg={'orange'} width={'1535px'} height={'600px'} position={'relative'} justifyContent={'center'} alignContent={'center'} alignItems={'center'}>
        <img src={PhInterface} alt="placeholder interface show off" style={{objectFit: 'cover', width: '100%', height: '100%', filter: 'contrast(.5) brightness(.5)'}}></img>
      </Box>
    </div>
  )
}

export default hero
