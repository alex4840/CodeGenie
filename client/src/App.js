import {Routes, Route, Navigate} from 'react-router-dom';
import { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import Navbar from './components/navbar';
import Homepage from './pages/homepage';
import Register from './pages/register';
import Login from './pages/login';
import {Toaster} from "react-hot-toast";
import Timecomplexity from './pages/timecomplexity';
import Optimization from './pages/Optimization';
import LanguageConvertor from './pages/LanguageConvertor';
import SyntaxCorr from './pages/SyntaxCorr';
function App() {
  const theme = useMemo(() => createTheme(themeSettings()), []);
  // const authToken = localStorage.getItem('authToken');

  return (
    <>
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar/>
        <Toaster/>
        <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/SyntaxCorr" element={<SyntaxCorr/>} />
          <Route path="/timecomplexity" element={<Timecomplexity/>} />
          <Route path="/Optimization" element={<Optimization/>} />
          <Route path="/LanguageConvertor" element={<LanguageConvertor/>} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
