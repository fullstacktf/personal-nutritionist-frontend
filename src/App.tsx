import React from "react";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
