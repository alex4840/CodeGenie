import React from 'react';
import { Box, Link, Typography} from '@mui/material';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from './logo1.svg';  // Use SVG file

const Navbar = () => {
  // const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  // const loggedIn = JSON.parse(localStorage.getItem('authToken'));

  // handle logout
  const handleLogout = async () => {
    try {
      await axios.post('/api/v1/auth/logout');
      localStorage.removeItem('authToken');
      toast.success('Logout successfully');
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  // Navigate to homepage when logo or text is clicked
  const handleLogoClick = () => {
    navigate('/homepage');  // Navigate to Homepage
  };

  return (
    <Box
      width="100%"
      backgroundColor="rgba(0, 0, 0, 0.8)"
      p="1rem 6%"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      textAlign="center"
      sx={{ boxShadow: 3, mb: 2 }}
      minHeight="64px"
    >
      <Box sx={{ margin: '0 auto' }}>
        <Typography
          variant="h1"
          color={'lightgrey'}
          fontWeight="bold"
          style={{ fontFamily: 'Space Grotesk', marginRight: '-25px', cursor: 'pointer' }}
          onClick={handleLogoClick}  // Add onClick handler for the logo and text
        >
          <img
            src={logo}
            alt="Logo"
            style={{
              height: '40px',
              marginRight: '10px',
              filter: 'greyscale(10%)'
            }}
          />
          CodeGenie
        </Typography>
      </Box>

      {location.pathname === '/login' || location.pathname === '/register' ? (
        <>
          <Link href="/login" underline="none" p={1}>
            <Typography
              component="span"
              variant="body1"
              color="lightgrey"
              fontWeight="bold"
              p={1}
              sx={{
                border: '2px solid',
                borderRadius: '30px',
                padding: '8px 16px',
                marginRight: '10px',
                marginLeft: '-50px',
                transition: 'transform 0.3s ease-in-out', // smooth transition on hover
                '&:hover': {
                  transform: 'translateY(-5px) scale(1.1)', // Slight move up and scale on hover
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)', // Add shadow on hover for effect
                }
              }}
            >
              Login
            </Typography>
          </Link>

          <Link href="/register" underline="none">
            <Typography
              component="span"
              variant="body1"
              color="lightgray"
              fontWeight="bold"
              p={1}
              sx={{
                border: '2px solid',
                borderRadius: '30px',
                padding: '8px 16px',
                marginRight: '-10px',
                transition: 'transform 0.3s ease-in-out', // smooth transition on hover
                '&:hover': {
                  transform: 'translateY(-5px) scale(1.1)', // Slight move up and scale on hover
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)', // Add shadow on hover for effect
                }
              }}
            >
              Sign Up
            </Typography>
          </Link>
        </>
      ) : (
        <Link href="/" underline="none" onClick={handleLogout}>
          <Typography
            component="span"
            variant="body1"
            color="primary"
            fontWeight="bold"
            p={1}
            sx={{
              border: '2px solid',
              borderRadius: '30px',
              padding: '8px 16px',
              marginRight: '-50px',
            }}
          >
            Logout
          </Typography>
        </Link>
      )}
    </Box>
  );
};

export default Navbar;
