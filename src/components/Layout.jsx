import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { nanoid } from "nanoid";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  const [data, setData] = useState({})
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    let storage = JSON.parse(localStorage.getItem('favorites'));
    console.log('storage', storage);
    if (storage) {
      setFavorites(storage);
    }
  }, [data]);

  const saveFavs = () => {
    let storage = [...favorites];
    storage.push({
      id: nanoid(),
      title: data.title,
      date: data.date,
      image: data.url
    });
    setFavorites(storage);
    localStorage.setItem('favorites', JSON.stringify(storage));
  };

  const handleFetch = date => {
    console.log('e', date);
    const key = import.meta.env.VITE_API_KEY;
    // let date = e.target.value;
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
        <Outlet context={{ data, favorites, handleFetch, saveFavs }} />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;