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

const LanguageConvertor = () => {
    const theme = useTheme();
    const isNotMobile = useMediaQuery("(min-width: 1000px)");

    const [text, setText] = useState("");
    const [response, setResponse] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (language) => {
        setLoading(true);
        setResponse("");
        setError("");

        try {
            // Send text and selected language to the backend
            const { data } = await axios.post("/api/v1/gemini/LanguageConvertor", { text, language });
            setResponse(data); // Display the converted code
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
                borderColor: "#797997",
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
                Convert your code Language
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
                            maxHeight: "600px",
                            overflowY: "auto",
                            fontFamily: "Arial",
                            border: "0.3px solid gray",
                            "& .MuiInputBase-input": {
                                color: "white",
                            },
                        }}
                    />

                    {/* Language Buttons */}
                    <Box
                        sx={{
                            display: "flex",
                            gap: "1rem",
                            justifyContent: isNotMobile ? "flex-start" : "center",
                        }}
                    >
                        {["C++", "Python", "Java", "C", "JavaScript"].map((language) => (
                            <Button
                                key={language}
                                variant="contained"
                                disabled={loading}
                                onClick={() => handleSubmit(language)}
                                sx={{
                                    backgroundColor: theme.palette.background.alt,
                                    color: "white",
                                    "&:hover": { backgroundColor: theme.palette.background.basic },
                                }}
                            >
                                {loading ? "Processing..." : language}
                            </Button>
                        ))}
                    </Box>

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
                            minHeight: "350px",
                            maxHeight: "600px",
                            borderRadius: 5,
                            borderColor: "gray",
                            bgcolor: theme.palette.background.default,
                            display: "flex",
                            alignItems: "flex-start",
                            padding: "1rem",
                            overflowY: "auto",
                            fontFamily: "Courier New",
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

export default LanguageConvertor;
