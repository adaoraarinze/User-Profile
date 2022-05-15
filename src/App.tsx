import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import UserProfile from './components/UserProfile'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
    <NavBar/>
    <UserProfile />
    <Routes>
        <Route path='\'/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
