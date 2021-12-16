import React from "react";
import "./App.css";

import { NavBar } from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import { NutritionistList } from "./components/NutritionistList/NutritionistList";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Footer />
      <NutritionistList />
    </div>
  );
}

export default App;
