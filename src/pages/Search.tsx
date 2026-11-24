import { useState } from 'react';
import { getToday, formatDate } from '../utils/getDates';

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

const today = getToday()
const earliestDate = '1995-06-16';

const Search = () => {
  const [searchDate, setSearchDate] = useState<string>(today);
  const [data, setData] = useState<ImageProps>();

  async function getInfo(pastDate: string) {
  const apiURL = `/.netlify/functions/getInfo?date=${pastDate}`;
  try {
    const res = await fetch(apiURL);
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

  const handleChange = (e: any) => {
    const newDate = e.target.value;
    setSearchDate(newDate);
  }

  const handleClick = (e: any) => {
    e.preventDefault();
    getInfo(formatDate(searchDate));
  }

  return (
    <div className="container">
      <h1>Search page</h1>
      <form 
        action=""
        onSubmit={(e) => handleClick(e)}
      >
        <label htmlFor="search">Choose a date:</label>
        <input
          type="date"
          name="search"
          id="search"
          min={earliestDate}
          max={today}
          value={searchDate}
          onChange={(e) => handleChange(e)}
          required
        />
        <button 
          type='submit'
        >
          Submit
        </button>
      </form>

      {data && <h2>{data.title}</h2>}
      {data && <img src={data.hdurl}/>}
      {data && <p>{data.explanation}</p>}
    </div>
  )
};

export default Search;
