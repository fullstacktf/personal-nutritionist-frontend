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
import { RecipeListPage } from "./pages/RecipeListPage/RecipeListPage";
import { EventListPage } from "./pages/EventListPage/EventListPage";
import { PersonalPage } from "./pages/SettingsPages/PersonalPage/PersonalPage";
import { CreateEventPage } from "./pages/CreateEventPage/CreateEventPage";
import { CreateRecipePage } from "./pages/Recipe/CreateRecipePage/CreateRecipePage";
import { CreateRecipeParticipantPage } from "./pages/Recipe/CreateRecipeParticipantPage/CreateRecipeParticipantPage";
import { HealthPage } from "./pages/SettingsPages/HealthPage/HealthPage";
import { VerificationPage } from "./pages/SettingsPages/VerificationPage/VerificationPage";

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
          <Route path="*" element={<Page404 />} />
          <Route path="/" element={ userToken !== "" ? <HomePage /> : <WebPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/calendar" element={ userToken !== "" ? <EventListPage /> : <WebPage />} />
          <Route path="/calendar/event/create/:participant" element={userToken !== "" ? <CreateEventPage/> : <WebPage />} />
          <Route path="/personal" element={ userToken !== "" ? <PersonalPage /> : <WebPage />} />
          <Route path="/health" element={ userToken !== "" ? <HealthPage /> : <WebPage />} />
          <Route path="/verification" element={ userToken !== "" ? <VerificationPage /> : <WebPage />} />
          <Route path="/nutritionists" element={ userToken !== "" ? <UserListPage /> : <WebPage />} />
          <Route path="/clients" element={ userToken !== "" ? <UserListPage /> : <WebPage />} />
          <Route path="/recipes" element={ userToken !== "" ? <RecipeListPage /> : <WebPage />} />
          <Route path="/recipes/create" element={ userToken !== "" ? <CreateRecipePage /> : <WebPage />} />
          <Route path="/weekmeal/recipe/create/:participant" element={userToken !== "" ? <CreateRecipeParticipantPage/> : <WebPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
