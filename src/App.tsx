import React from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { green, brown } from "@mui/material/colors";

import { Home } from "./pages/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { NavBar } from "./components/NavBar/NavBar";

// Borrar
import { SideMenu } from "./components/Menu/Menu";

const theme = createTheme ({
  palette: {
    primary: {
      main: green[300],
    },
    secondary: {
      main: brown[500],
    },
    info: {
      main: "#FFFFFF"
    },
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      {/* <Home /> */}
      <SideMenu />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
