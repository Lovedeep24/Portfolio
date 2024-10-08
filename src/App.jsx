import React from 'react'
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Projects from "./routes/Projects";
import About from "./routes/About";
// import {Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
    return (
 <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
       <Route path="/projects" element={<Projects />} />
       <Route path="/contact" element={<Contact/>} />
       </Routes>
       </Router>
    )
}