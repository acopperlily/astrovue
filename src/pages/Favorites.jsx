import React from "react";
import { Link, useOutletContext } from "react-router-dom";

const Favorites = () => {
  const { favorites, handleFetch } = useOutletContext([]);
  console.log('favs:', favorites);

  const favElements = favorites.map(fav => {
    return (
      <Link
        to='/search'
        className="fav-link"
        onClick={() => handleFetch(fav.date)}
        key={fav.id}
      >
        <div 
          className="fav-container"
          style={{backgroundImage: `url(${fav.image})` }}
        >

          <h3>{fav.title}</h3>
          <h4>{fav.date}</h4>
        </div>
      </Link>
    );
  });

  return (
    <div className="container">
      <h1>Favs go here</h1>
      {favElements}
    </div>
  );
};

export default Favorites;