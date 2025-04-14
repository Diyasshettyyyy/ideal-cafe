import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SignIn from './SignIn';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
