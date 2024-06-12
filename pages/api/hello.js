// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  // Assuming req.query contains the query parameters you want to pass
  // For example, if your request URL is /api/data?param1=value1&param2=value2
  // req.query would be { param1: 'value1', param2: 'value2' }

  // Construct the URL with query parameters
  const url = new URL('https://official-joke-api.appspot.com/random_ten');
  //Object.keys(req.query).forEach(key => url.searchParams.append(key, req.query[key]));

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`An error occurred: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    // res.status(200).json({ name: 'John Doe' });
    res.status(200).json(data.map((goat) => ({ type: goat.type, setup: goat.setup, punchline: goat.punchline, id: goat.id })));
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while fetching data.' });
  }
}

