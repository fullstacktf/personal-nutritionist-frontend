import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import Footer from "./components/Footer/Footer"
import LogIn from "./components/LogIn/LogIn"
function App() {
  return (
    <div className="App">
      <Home></Home>
      <LogIn />
      <Footer />
    </div>
  );
}

export default App;
