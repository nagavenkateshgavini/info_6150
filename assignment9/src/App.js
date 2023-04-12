import React from 'react';
import { Route, Routes } from "react-router-dom";

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login';
import NavbarComp from './components/NavbarComp';
import Home from './components/Pages/Home';
import AboutUs from './components/Pages/AboutUs';
import Contact from './components/Pages/Contact';
import Jobs from './components/Pages/Jobs';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
    <NavbarComp />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </>
  )   
}

export default App;