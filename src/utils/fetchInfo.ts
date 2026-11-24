const fetchInfo = async (searchDate: string) => {
  const apiURL = `/.netlify/functions/getInfo?date=${searchDate}`;
  const res = await fetch(apiURL);

  if (!res.ok) {
    console.error('oof');
    return;
  }
  
  return res.json();
}

export default fetchInfo;
