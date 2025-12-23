// import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Search from './pages/Search';
import Favorites from './pages/Favorites';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='search' element={<Search />} />
          <Route path='favorites' element={<Favorites />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
