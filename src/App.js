import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <>
      <Navigation />

        <Routes>
          <Route path="/home" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/" Component={Contact} />
        </Routes>
    </>
  );
}

export default App;
