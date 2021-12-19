import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useAppSelector } from "./app/hooks";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { green, brown } from "@mui/material/colors";

import { WebPage } from "./pages/WebPage/WebPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { SignUpPage } from "./pages/SignUpPage/SignUpPage";
import { Page404 } from "./pages/Page404/Page404";
import { NavBar } from "./components/NavBar/NavBar";
import { LogInPage } from "./pages/LogInPage/LogInPage";
import { PersonalPage } from "./pages/PersonalPage/PersonalPage";

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
  const userToken = useAppSelector((state) => state.user.token);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={ userToken !== "" ? <HomePage /> : <WebPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="*" element={<Page404 />} />
          <Route path="/personal" element={ userToken !== "" ? <PersonalPage/> : <WebPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
