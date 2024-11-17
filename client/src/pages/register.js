import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Typography, useTheme, useMediaQuery, TextField, Button, Alert, Collapse } from '@mui/material';
import axios from 'axios';
import toast from "react-hot-toast";
import SpaceScene from '../components/SpaceScene'; // Import SpaceScene
import '../App.css';

const Register = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isNotMobile = useMediaQuery("(min-width: 1000px)");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/v1/auth/register", { username, email, password });
      toast.success("Registration Successful");
      navigate("/login");
    } catch (err) {
      console.log(error);
      if (err.response.data.error) {
        setError(err.response.data.error);
      } else if (err.message) {
        setError(err.message);
      }
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <Box>
      {/* 3D space animation background */}
      <SpaceScene />

      {/* Signup form container */}
      <Box
        width={isNotMobile ? "40%" : "80%"}
        p={"2rem"}
        m={"2rem auto"}
        borderRadius={5}
        sx={{
          boxShadow: 5,
          backgroundColor: "rgba(34, 44, 59, 0.5)", // Updated for transparency
          position: "relative",
          zIndex: 1,
        }}
      >
      
        <Collapse in={error}>
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        </Collapse>

        <form onSubmit={handleSubmit}>
          <Typography variant='h3' color={'azure'}> Sign Up</Typography>
          <TextField
            label="Username"
            required
            margin="normal"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            InputProps={{
              sx: {
                color: "azure",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#a9a9a9",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#a9a9a9",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#a9a9a9",
                },
              },
            }}
            InputLabelProps={{ sx: { color: "#a9a9a9" } }}
          />
          <TextField
            label="Email"
            type='email'
            required
            margin="normal"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              sx: {
                color: "azure",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#a9a9a9",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#a9a9a9",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#a9a9a9",
                },
              },
            }}
            InputLabelProps={{ sx: { color: "#a9a9a9" } }}
          />
          <TextField
            label="Password"
            type='password'
            required
            margin="normal"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              sx: {
                color: "azure",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#a9a9a9",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#a9a9a9",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#a9a9a9",
                },
              },
            }}
            InputLabelProps={{ sx: { color: "#a9a9a9" } }}
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            size='large'
            sx={{
              backgroundColor: theme.palette.background.alt,
              color: 'white',
              mt: 2,
              '&:hover': { backgroundColor: theme.palette.background.basic }
            }}
          >
            Register
          </Button>
          <Typography mt={2} color={'darkgrey'}>
            Already have an account?{' '}
            <Link to="/login">Login</Link>
          </Typography>
        </form>
      </Box>
    </Box>
  );
};

export default Register;
