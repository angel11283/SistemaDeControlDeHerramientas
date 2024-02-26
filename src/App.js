import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import LogIn from "./components/Login";
import Menu from './components/Menu';
import Prestamos from './components/Prestamos';
import Alumnos from './components/Alumnos';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LogIn/>}/>
          <Route path="/Menu" element={<Menu/>}/>
          <Route path="/Prestamos" element={<Prestamos/>}/>
          <Route path="/Alumnos" element={<Alumnos/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;