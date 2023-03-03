import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarComp from "./Components/NavbarComp";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import About from "./Components/About";

function App() {
  return (
    <>
      <Router>
        <NavbarComp />
        <Routes>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
