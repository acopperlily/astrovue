import type { Context } from "@netlify/functions";


const KEY = Netlify.env.get('VITE_API_KEY');
const DOMAIN = "https://science.nasa.gov/wp-json/wp/v2/apod-basic/";

export default async (req: Request, context: Context) => {

  // Pull out date because APOD request doesn't use query string
  const dateParam = req.url.split('=')[1];
  console.log('dateParam:', dateParam);

  if (!KEY) {
    return Response.json(
      { error: 'Server configuration error.' },
      { status: 500 }
    );
  }

  try {
    console.log('domain:', DOMAIN)
    const res = await fetch(
      `${DOMAIN}${dateParam}`,
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
