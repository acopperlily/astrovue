import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

const Search = props => {
  const { data, handleFetch, saveFavs } = useOutletContext();
  const [title, setTitle] = useState('');

  return (
    <div className="container">
      <h1>Search page</h1>
      {data.title}
      <img src={data.hdurl} />
      {data.date}
      {data.explanation}
      <input 
        className="btn" 
        type="date" 
        name="date" 
        id="date" 
        onChange={(e) => handleFetch(e.target.value)}
      />
      <button className="btn" onClick={() => saveFavs()}>Save</button>
    </div>
  );
};

export default Search;