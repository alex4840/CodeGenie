import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  Card,
  CircularProgress,
} from "@mui/material";

const Optimization = () => {
  const theme = useTheme();
  // const navigate = useNavigate();
  const isNotMobile = useMediaQuery("(min-width: 1000px)");

  const [text, setText] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse("");
    setError("");

    try {
      const { data } = await axios.post("/api/v1/gemini/Optimization", { text });
      setResponse(data);
    } catch (err) {
      console.error(err);
      if (err.response?.data?.error) {
        setError(err.response.data.error);
      } else if (err.message) {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      width="80%"
      p="2rem"
      m="2rem auto"
      borderRadius="2rem"
      sx={{
        boxShadow: "4px 4px 10px 2px rgba(36, 97, 113, 0.5)",
        border: "2px solid",
        borderColor: "#428897",
      }}
      backgroundColor={theme.palette.background.default}
      color={theme.palette.neutral.main}
    >
      {/* Error Message */}
      <Collapse in={Boolean(error)}>
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      </Collapse>

      <Typography
        variant="h3"
        mb={2}
        sx={{
          fontWeight: "bold",
          color: theme.palette.primary.main,
        }}
      >
        Optimize Your Code
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: isNotMobile ? "row" : "column",
          gap: "2rem",
        }}
      >
        {/* Input Section */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            flex: 1.8,
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <TextField
            placeholder="Paste or type your text here"
            type="text"
            multiline
            required
            fullWidth
            value={text}
            onChange={(e) => setText(e.target.value)}
            sx={{
              minHeight: "350px",
              maxHeight: "600px", // Maximum height before scrolling
              overflowY: "auto", // Enable vertical scrolling
              fontFamily: "Arial",
              border: "0.3px solid gray",
              "& .MuiInputBase-input": {
                color: "white",
                scrollbarColor: "#333 #1a1a1a",
                scrollbarWidth: "thin",
              },
              "& .MuiInputBase-root": {
                "&::-webkit-scrollbar": {
                  width: "4px",
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "#333",
                  borderRadius: "4px",
                },
                "&::-webkit-scrollbar-track": {
                  backgroundColor: "#1a1a1a",
                  borderRadius: "4px",
                },
              },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            disabled={loading}
            sx={{
              backgroundColor: theme.palette.background.alt,
              color: "white",
              "&:hover": { backgroundColor: theme.palette.background.basic },
            }}
          >
            {loading ? "Processing..." : "Submit"}
          </Button>

          <Typography mt={2} color="white" textAlign="center">
            Not the right tool?{" "}
            <Link to="/homepage" style={{ color: "white" }}>
              Go Back
            </Link>
          </Typography>
        </Box>

        {/* Output Section */}
        <Box
          sx={{
            flex: 2.5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <Card
            sx={{
              border: 1,
              boxShadow: 0,
              minHeight: "350px", // Minimum height for the response box
              maxHeight: "600px", // Maximum height before scrolling
              borderRadius: 5,
              borderColor: "gray",
              bgcolor: theme.palette.background.default,
              display: "flex",
              alignItems: "flex-start",
              padding: "1rem",
              overflowY: "auto", // Enable vertical scrolling
              fontFamily: "Courier New",
              "&::-webkit-scrollbar": {
                width: "10px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#333",
                borderRadius: "10px",
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "#1a1a1a",
                borderRadius: "10px",
              },
            }}
          >
            {loading ? (
              <CircularProgress color="primary" />
            ) : response ? (
              <Typography
                sx={{
                  color: "white",
                  fontSize: "large",
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                }}
              >
                {response}
              </Typography>
            ) : (
              <Typography
                variant="h6"
                color="grey"
                sx={{
                  fontStyle: "italic",
                  fontSize: "large",
                }}
              >
                Response will be displayed here
              </Typography>
            )}
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Optimization;
