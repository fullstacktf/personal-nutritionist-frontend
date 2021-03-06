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
import { SettingsPage } from "./pages/SettingsPage/SettingsPage";
import { CreateEventPage } from "./pages/CreateEventPage/CreateEventPage";
import { PersonalForm } from "./components/Forms/PersonalForm/PersonalForm";
import { AccountForm } from "./components/Forms/AccountForm/AccountForm";
import { HealthForm } from "./components/Forms/HealthForm/HealthForm";
import { VerificationForm } from "./components/Forms/VerificationForm/VerificationForm";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { HirePage } from "./pages/HirePage/HirePage";
import { CreateRecipePage } from "./pages/Recipe/CreateRecipePage/CreateRecipePage";
import { CreateRecipeParticipantPage } from "./pages/Recipe/CreateRecipeParticipantPage/CreateRecipeParticipantPage";

const theme = createTheme ({
  palette: {
    primary: {
      main: green[300],
    },
    secondary: {
      main: brown[500],
    },
    info: {
      main: "#BDBDBD"
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
          <Route path="/settings/personal" element={ userToken !== "" ? <SettingsPage setting={<PersonalForm />} title="Informaci??n personal" description="Aqu?? puedes modificar tu informaci??n personal" /> : <WebPage />} />
          <Route path="/settings/account" element={ userToken !== "" ? <SettingsPage setting={<AccountForm />} title="Informaci??n de la cuenta" description="Aqu?? puedes modificar tu informaci??n sobre tu cuenta" /> : <WebPage />} />
          <Route path="/settings/health" element={ userToken !== "" ? <SettingsPage setting={<HealthForm />} title="Informaci??n de salud" description="Aqu?? puedes modificar tu informaci??n sobre tu salud" /> : <WebPage />} />
          <Route path="/settings/verification" element={ userToken !== "" ? <SettingsPage setting={<VerificationForm />} title="Verif??cate" description="Aqu?? puedes modificar tu informaci??n sobre tus estudios" /> : <WebPage />} />
          <Route path="/nutritionists" element={ userToken !== "" ? <UserListPage /> : <WebPage />} />
          <Route path="/clients" element={ userToken !== "" ? <UserListPage /> : <WebPage />} />
          <Route path="/profile/:user" element={ userToken !== "" ? <ProfilePage /> : <WebPage />} />
          <Route path="/hire/:user" element={ userToken !== "" ? <HirePage /> : <WebPage />} />
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
