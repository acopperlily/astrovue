import type { Context } from "@netlify/functions";


const KEY = Netlify.env.get('VITE_API_KEY');
const DOMAIN = "https://science.nasa.gov/wp-json/wp/v2/apod-basic/";

export default async (req: Request, context: Context) => {

  console.log('anything?');

  const url = new URL(req.url);
  console.log('url:', url);
  let day = url.searchParams.get('date') || '260803';
  // const day = req.url.split('?');
  console.log('day:', day);
  console.log('???', req.url);
  console.log()

  if (!KEY) {
    return Response.json(
      { error: 'Server configuration error.' },
      { status: 500 }
    );
  }

  try {
    const res = await fetch(
      `${DOMAIN}${encodeURIComponent(day)}`,
      
      {
        method: "GET",
        headers: { 
          'Authorization': `Bearer ${KEY}`,
          'Content-Type': 'application/json',
        }
      }
    );

    console.log('mts res:', res);

    if (!res.ok) {
      return Response.json(
        { error: `Upstream API error: ${res.statusText}.` },
        { status: res.status }
      );
    }

    const data = await res.json();

    return Response.json(data, { status: 200 });

  } catch (error) {
    return Response.json(
      { error: 'Failed to fetch external data' },
      { status: 502 }
    );
  }
}
