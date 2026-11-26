import { useState } from 'react';
import { getToday, formatDate } from '../utils/getDates';
import fetchInfo from '../utils/fetchInfo';

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

const DATE_MAX = getToday();
const DATE_MIN = '1995-06-16';

const Search = () => {
  const [searchDate, setSearchDate] = useState<string>(DATE_MAX);
  const [data, setData] = useState<ImageProps>();

  const getInfo = async (pastDate: string) => {
    try {
      const newData = await fetchInfo(pastDate);

      console.log('func:', newData);
      setData(newData);

    } catch (error) {
      console.error(error);
    }
  }

  const handleChange = (e: any) => {
    const newDate = e.target.value;
    setSearchDate(newDate);
  }

  const handleClick = (e: any) => {
    e.preventDefault();
    const formattedDate = formatDate(searchDate);
    console.log('formattedDate:', formattedDate);
    getInfo(formattedDate)
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
          min={DATE_MIN}
          max={DATE_MAX}
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
