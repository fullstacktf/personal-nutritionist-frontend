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
import { Footer } from "./components/Footer/Footer";
import { UserListPage } from "./pages/UserListPage/UserListPage";
import { PersonalPage } from "./pages/PersonalPage/PersonalPage";
import { HealthPage } from "./pages/HealthPage/HealthPage";
import { VerificationPage } from "./pages/VerificationPage/VerificationPage";
import { RecipeListPage } from "./pages/RecipeListPage/RecipeListPage";

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
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="*" element={<Page404 />} />
          <Route path="/" element={ userToken !== "" ? <HomePage /> : <WebPage />} />
          <Route path="/list" element={<UserListPage />} />
          <Route path="/personal" element={<PersonalPage />} />
          <Route path="/health" element={<HealthPage />} />
          <Route path="/personal" element={<PersonalPage/>} />
          <Route path="/verification" element={<VerificationPage />} />
          <Route path="/recipes" element={<RecipeListPage />} />
          {/* <Route path="/list" element={ userToken !== "" ? <UserListPage /> : <WebPage />} />
          <Route path="/personal" element={ userToken !== "" ? <PersonalPage /> : <WebPage />} />
          <Route path="/health" element={ userToken !== "" ? <HealthPage /> : <WebPage />} />
          <Route path="/personal" element={ userToken !== "" ? <PersonalPage/> : <WebPage />} />
          <Route path="/verification" element={ userToken !== "" ? <VerificationPage /> : <WebPage />} />
          <Route path="/recipes" element={ userToken !== "" ? <RecipeListPage /> : <WebPage />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
