import { Box, Typography } from '@mui/material';
import React from 'react';

const About = () => {
  return (
    <div>
      <Box display='flex' flexDirection='columns' alignItems='center'>
        <Typography sx={{fontFamily:"inherit"}} variant='h2'> This is a Basic CRUD Application</Typography>
      </Box>
    </div>
  )
};

export default About;