import "./App.css";
import Home from "./pages/Home/Home";
import { SignUp } from "./components/SignUp/SignUp";
function App() {
  return (
    <div className="App">
      <Home></Home>
      <SignUp />
    </div>
  );
}

export default App;
