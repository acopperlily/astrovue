import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

const Search = props => {
  const { data, handleFetch } = useOutletContext();
  const [title, setTitle] = useState('');

  console.log('wut', handleFetch);
  return (
    <div className="container">
      <h1>Search page</h1>
      <img src={data.hdurl} />
      {data.title}
      {data.date}
      {data.explanation}
      <input 
        className="btn" 
        type="date" 
        name="date" 
        id="date" 
        onChange={(e) => handleFetch(e)}
      />
    </div>
  );
};

export default Search;