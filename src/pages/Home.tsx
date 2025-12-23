import { Link } from 'react-router';



const Home = () => {
  return (
    <div className="container">
      <h1>AstroVue Home Page</h1>
      <Link to='search'>Search</Link>
    </div>
  );
};

export default Home;
