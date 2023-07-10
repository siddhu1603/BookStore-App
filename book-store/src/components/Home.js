import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Box display='flex' flexDirection='column' alignItems='center'><div className='hometitle'>Welcome to Book Store!</div>
        <Button LinkComponent={Link} to="/books" sx={{marginTop: 15, backgroundColor: '#5d1812'}}variant='contained'>
          <Typography variant="h3">VIEW ALL BOOKS</Typography>
        </Button>
      </Box>
    </div>
  )
};

export default Home;