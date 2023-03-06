import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import AlertComp from "./components/AlertComp";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <NavbarComp />
          <AlertComp alert="This is amazing React App" />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/about" element={<About />}></Route>
              <Route exact path="/login" element={<Login />}></Route>
              <Route exact path="/signup" element={<Signup />}></Route>
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
