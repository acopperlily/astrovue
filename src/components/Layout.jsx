import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  const [data, setData] = useState({})

  const handleFetch = e => {
    console.log('e', e.target.value);
    const key = import.meta.env.VITE_API_KEY;
    let date = e.target.value;
    let url = `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${date}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setData(data);
      })
      .catch(err => {
        console.log('error:', err);
      })

  }

  return (
    <div className="site-wrapper">
      <Header />
      <main>
        <Outlet context={{ data, handleFetch}} />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;