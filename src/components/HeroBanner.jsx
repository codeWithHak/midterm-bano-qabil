import React from 'react'
import { Box, Typography, Stack, Button } from '@mui/material'
import HeroBannerImage from '../assets/images/banner1.png'
const HeroBanner = () => {
  return (
    <Box sx={{
        mt:{lg:"212px", xs: "70px" },
        ml:{sm: "50px"}
    }} position="relative" p="20px"
    >
        <Typography color="#FF2625"
        fontWeight="600" fontSize="26px">
            Fitnesity
        </Typography >
        <Typography fontWeight={700}
        sx={{fontSize: {lg:'44px', xs: '40px'}}}>
            Fitness Is An <br />Essential Necessity
        </Typography>
        <Typography
        fontSize="22px"
        lineHeight="35px"
        mb={3}>
            Checkout the most effective exercises
        </Typography>
        <Button variant="contained" color="error" href="#exercises">Explore Exercises</Button>
        <Typography 
        fontWeight={600}
        color="ff2625"
        sx={{
            opacity:0.1,
            display:{ lg:'block' , xs: 'none'}
        }}
        fontSize="200px">
            Exercise
        </Typography>
        <img src={HeroBannerImage} alt="Banner"  className='hero-banner-img'/>
    </Box>
  
  )
}

export default HeroBanner