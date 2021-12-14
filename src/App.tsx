import React from "react";
import "./App.css";
import { Home } from "./pages/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { NavBar } from "./components/NavBar/NavBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { green, brown } from "@mui/material/colors";

const theme = createTheme ({
  palette: {
    primary: {
      main: green[300],
    },
    secondary: {
      main: brown[500],
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Home />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
