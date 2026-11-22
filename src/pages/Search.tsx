import { useState } from 'react';
// import { useOutletContext } from "react-router";

interface ImageProps {
  title: string;
  hdurl?: string;
  url: string;
  explanation: string;
  media_type: string;
  copyright?: string;
  basic_html?: string;
  basic_html_url?: string;
}

const options: Intl.DateTimeFormatOptions = {
  year: "2-digit",
  month: "2-digit",
  day: "2-digit"
};

const now = new Date();
const dateString = now.toLocaleDateString("en-US", options);
console.log('date string:', dateString);


const [month, day, year] = dateString.split('/');
const TODAY = `${year}${month}${day}`;

const Search = () => {
  // const { data, handleFetch, savFavs } = useOutletContext();
  // const [title, setTitle] = useState('');
  const [data, setData] = useState<ImageProps>();
  // const DAY = '260307'
  let pastDate: string = TODAY;

  async function getInfo(pastDate: string) {
  // const testDate = '240417'
  const apiURL = `/.netlify/functions/getInfo?date=${pastDate}`;
  try {
    const res = await fetch(apiURL);
    console.log('search:', res);
    if (!res.ok) {
      console.error('Network response was ass.');
    }
    const info = await res.json();
    console.log('func:', info);
    setData(info);

  } catch (error) {
    console.error(error);
  }
  // return
  }

  const handleClick = (e: any) => {
    e.preventDefault();
    pastDate = e.target.value;
    console.log('day:', pastDate);
    pastDate = pastDate.slice(2).split('-').join('');
    console.log(pastDate);
    getInfo(pastDate);
  }

  return (
    <div className="container">
      <h1>Search page</h1>
      <input 
        type="date" 
        id="butt"
        min="2000-01-01"
        max={`${month}-${day}-${year}`}
        onChange={handleClick} 
      />

      {data && <h2>{data.title}</h2>}
      {data && <img src={data.hdurl} />}
      {data && <p>{data.explanation}</p>}
    </div>
  )
};

export default Search;
