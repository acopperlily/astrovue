import { useEffect, useState } from 'react';
import { Link } from 'react-router';

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

const now = new Date();
const test = now.toJSON().slice(0, 10);
console.log('test:', test)
console.log('now:', now);

const [year, month, day] = test.split('-');
const TODAY = `${year.slice(2)}${month}${+day-1}`;
console.log('today:', TODAY);
// const TODAY = '2026-10-30'


const KEY = import.meta.env.VITE_API_KEY;
const DOMAIN = `https://science.nasa.gov/wp-json/wp/v2/apod-basic/${TODAY}?api_key=`;

const Home = () => {
  const [data, setData] = useState<ImageProps>({ 
    title: "In the Center of Spiral Galaxy M61", 
    hdurl: fallbackIMG,
    url: fallbackIMG,
    explanation: "Is there a spiral galaxy in the center of this spiral galaxy? Sort of. Image data from the Hubble Space Telescope, the European Southern Observatory, and smaller telescopes on planet Earth are combined in this detailed portrait of face-on spiral galaxy Messier 61 (M61) and its bright center. A mere 55 million light-years away in the Virgo Cluster of Galaxies, M61 is also known as NGC 4303. It's considered to be an example of a barred spiral galaxy similar to our own Milky Way. Like other spiral galaxies, M61 also features sweeping spiral arms, cosmic dust lanes, pinkish star forming regions, and young blue star clusters. Its core houses an active supermassive black hole surrounded by a bright nuclear spiral -- infalling star-forming gas that itself looks like a separate spiral galaxy.",
    media_type: 'image',
    copyright: ''
  });

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchToday = async () => {
      const url = `${DOMAIN}${KEY}`;
      try {
        const res = await fetch(url, { signal });
        if (!res.ok) {
          console.error('oof');
        }
        const headers = res.headers.get('Content-Type');
        console.log('headers:', headers);
        const data = await res.json();
        console.log(data);
        const parser = new DOMParser();
        const doc = parser.parseFromString(data.explanation, 'text/html');
        console.log(doc.body.textContent);
        console.log('doc:', doc);
        setData(() => ({
          ...data,
          explanation: doc.body.textContent
        }));
      } catch (err) {
        console.error('Error', err);
      }
    }

    fetchToday();
    return () => {
      controller.abort;
    }
  }, []);

  useEffect(() => {
    async function getInfo() {
      const testDate = '240417'
      const apiURL = `/.netlify/functions/getInfo?date=${testDate}`;
      try {
        const res = await fetch(apiURL);
        console.log('res:', res);
        if (!res.ok) {
          console.error('Network response was ass.');
        }
        const info = await res.json();

        console.log('func:', info);

        // const newTitle = info.title;
      
        // let imageURL = data;
        // setData((data) => ({
        //   ...data,
        //   title: newTitle
        // }));
      } catch (error) {
        console.error(error);
      }
      // return
    }
    getInfo();
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
