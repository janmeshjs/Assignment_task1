// server.js
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/products', async (req, res) => {
  try {
    const response = await axios.get('https://s3.amazonaws.com/open-to-cors/assignment.json');
    const responseData = response.data;

    if (!responseData.products || typeof responseData.products !== 'object') {
      throw new Error('Invalid data format');
    }

    const products = Object.values(responseData.products);

    // Sort products by descending popularity
    const sortedProducts = products.sort((a, b) => b.popularity - a.popularity);

    res.json(sortedProducts);
  } catch (error) {
    console.error('Error fetching data:', error.message);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
