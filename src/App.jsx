import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Layout from './components/Layout';
import About from './pages/About';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import Search from './pages/Search';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='search' element={<Search />} />
        <Route path='favorites' element={<Favorites />} />
        <Route path='about' element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
