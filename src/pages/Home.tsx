import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { getToday, formatDate } from '../utils/getDates';
import { convert } from 'html-to-text';
import fetchInfo from '../utils/fetchInfo';

import fallbackIMG from '../assets/fallback.jpg';

// 2025-06-24 good photo
// 2024-06-30 video

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

const now = getToday();
const TODAY = formatDate(now);
console.log('today:', TODAY);

const Home = () => {
  const [data, setData] = useState<ImageProps>({ 
    title: "Loading...", 
    hdurl: fallbackIMG,
    url: fallbackIMG,
    explanation: '',
    media_type: 'image',
    copyright: ''
  });

  useEffect(() => {
    const fetchToday = async () => {
      try {
        const newData = await fetchInfo(TODAY);
        const plaintext = convert(newData.explanation);
        console.log('html:', plaintext);
        setData((newData) => ({
          ...newData,
          explanation: plaintext
        }));
      } catch (error) {
        console.error(error);
      }
    }

    fetchToday();
  }, []);

  return (
    <div className="container">
      <h1>AstroVue Home Page</h1>
      {data && <h2>{data.title}</h2>}
      {data && <img src={data.hdurl} />}
      {data && <p>{data.explanation}</p>}

      <Link to='search'>Search</Link>

    </div>
  );
};

export default Home;
