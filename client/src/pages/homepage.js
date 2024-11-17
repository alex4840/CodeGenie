import React from 'react';
import { Box, Typography, Card, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ChatRounded from "@mui/icons-material/ChatRounded";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import SpellcheckIcon from '@mui/icons-material/Spellcheck';
import JoinInnerIcon from '@mui/icons-material/JoinInner';
import SpaceScene from '../components/SpaceScene'; // Import SpaceScene

const Homepage = () => {
  const navigate = useNavigate();

  const handleCardClick = (cardName) => {
    navigate(`/${cardName.toLowerCase()}`); // Navigate on card click
  };

  return (
    <Box sx={{ position: 'relative', height: '100vh' }}>
      {/* 3D space animation background */}
      <SpaceScene />

      {/* Main content area */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "75vh",
          position: 'relative', // This ensures the content is above the SpaceScene
          zIndex: 1
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "auto auto",
            gap: "100px",
            marginLeft: "350px",
            gridTemplateAreas: `
              "languageConversion codeOptimization ."
              "syntaxCorrection timeComplexity ."
            `,
          }}
        >
          {/* Language Conversion - Left of Code Optimization */}
          <Box sx={{ gridArea: "languageConversion", display: "flex", justifyContent: "center" }}>
            <Card
              onClick={() => handleCardClick("LanguageConvertor")}
              sx={{
                boxShadow: 2,
                borderRadius: 5,
                height: 220,
                width: 240,
                backgroundColor: "rgba(255, 255, 255, 0.4)", // Slight transparency
                border: "2px solid rgba(255, 255, 255, 0.4)", // Light border
                transition: "transform 0.3s ease-in-out", // Smooth transition
                "&:hover": {
                  transform: "scale(1.05) translateZ(10px)", // 3D effect on hover
                  cursor: "pointer",
                  boxShadow: 4, // Increase box shadow on hover
                },
              }}
            >
              <JoinInnerIcon sx={{ fontSize: 80, color: "primary.dark", mt: 2, ml: 2 }} />
              <Stack p={3} pt={0}>
                <Typography fontWeight="bold" variant="h5">
                  LANGUAGE CONVERSION
                </Typography>
              </Stack>
            </Card>
          </Box>

          {/* Code Optimization - Centered Top Card */}
          <Box sx={{ gridArea: "codeOptimization", display: "flex", justifyContent: "center" }}>
            <Card
              onClick={() => handleCardClick("Optimization")}
              sx={{
                boxShadow: 2,
                borderRadius: 5,
                height: 220,
                width: 240,
                backgroundColor: "rgba(255, 255, 255, 0.4)", // Slight transparency
                border: "2px solid rgba(255, 255, 255, 0.4)", // Light border
                transition: "transform 0.3s ease-in-out", // Smooth transition
                "&:hover": {
                  transform: "scale(1.05) translateZ(10px)", // 3D effect on hover
                  cursor: "pointer",
                  boxShadow: 4, // Increase box shadow on hover
                },
              }}
            >
              <SpellcheckIcon sx={{ fontSize: 80, color: "primary.dark", mt: 2, ml: 2 }} />
              <Stack p={3} pt={0}>
                <Typography fontWeight="bold" variant="h5">
                  CODE OPTIMIZATION
                </Typography>
              </Stack>
            </Card>
          </Box>

          {/* Syntax Correction */}
          <Box sx={{ gridArea: "syntaxCorrection", display: "flex", justifyContent: "center" }}>
            <Card
              onClick={() => handleCardClick("SyntaxCorr")}
              sx={{
                boxShadow: 2,
                borderRadius: 5,
                height: 220,
                width: 240,
                backgroundColor: "rgba(255, 255, 255, 0.4)", // Slight transparency
                border: "2px solid rgba(255, 255, 255, 0.4)", // Light border
                transition: "transform 0.3s ease-in-out", // Smooth transition
                "&:hover": {
                  transform: "scale(1.05) translateZ(10px)", // 3D effect on hover
                  cursor: "pointer",
                  boxShadow: 4, // Increase box shadow on hover
                },
              }}
            >
              <ChatRounded sx={{ fontSize: 80, color: "primary.dark", mt: 2, ml: 2 }} />
              <Stack p={3} pt={0}>
                <Typography fontWeight="bold" variant="h5">
                  SYNTAX CORRECTION
                </Typography>
              </Stack>
            </Card>
          </Box>

          {/* Time Complexity Analysis */}
          <Box sx={{ gridArea: "timeComplexity", display: "flex", justifyContent: "center" }}>
            <Card
              onClick={() => handleCardClick("timecomplexity")}
              sx={{
                boxShadow: 2,
                borderRadius: 5,
                height: 220,
                width: 240,
                backgroundColor: "rgba(255, 255, 255, 0.4)", // Slight transparency
                border: "2px solid rgba(255, 255, 255, 0.4)", // Light border
                transition: "transform 0.3s ease-in-out", // Smooth transition
                "&:hover": {
                  transform: "scale(1.05) translateZ(10px)", // 3D effect on hover
                  cursor: "pointer",
                  boxShadow: 4, // Increase box shadow on hover
                },
              }}
            >
              <AccessTimeFilledIcon sx={{ fontSize: 80, color: "primary.dark", mt: 2, ml: 2 }} />
              <Stack p={3} pt={0}>
                <Typography fontWeight="bold" variant="h5">
                  TIME COMPLEXITY ANALYSIS
                </Typography>
              </Stack>
            </Card>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Homepage;
