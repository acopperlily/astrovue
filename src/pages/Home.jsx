import React from "react";
import { Link } from 'react-router-dom';

const Home = props => {
  return (
    <div className="container">
      <h1>ASTROVUE HOME PAGE</h1>
      <Link to='search'>Search</Link>
    </div>
  );
};

export default Home;