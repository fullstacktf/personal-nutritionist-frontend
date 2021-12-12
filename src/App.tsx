import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
