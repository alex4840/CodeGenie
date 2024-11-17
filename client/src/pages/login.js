import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  TextField,
  Button,
  Alert,
  Collapse,
} from "@mui/material";
import SpaceScene from "../components/SpaceScene"; // Import the SpaceScene component

const Login = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  // Media query for responsiveness
  const isNotMobile = useMediaQuery("(min-width: 1000px)");

  // State variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Login control
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/v1/auth/login", { email, password });
      toast.success("Login Successful");
      localStorage.setItem("authToken", true);
      navigate("/homepage");
    } catch (err) {
      console.log(error);
      if (err.response?.data?.error) {
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
    <Box sx={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      {/* Space Scene as Background */}
      <SpaceScene />

      {/* Foreground Login Box */}
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
        backgroundColor={theme.palette.background.default}
      >
        <Collapse in={!!error}>
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        </Collapse>
        <form onSubmit={handleSubmit}>
          <Typography variant="h3" color="azure">
            Sign In
          </Typography>

          <TextField
            label="email"
            type="email"
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
            InputLabelProps={{
              sx: { color: "#a9a9a9" },
            }}
          />
          <TextField
            label="password"
            type="password"
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
            InputLabelProps={{
              sx: { color: "#a9a9a9" },
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            sx={{
              backgroundColor: theme.palette.background.alt,
              color: "white",
              mt: 2,
              "&:hover": { backgroundColor: theme.palette.background.basic },
            }}
          >
            Sign In
          </Button>

          <Typography mt={2} color="grey">
            Don’t have an account? <Link to="/register">Register</Link>
          </Typography>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
