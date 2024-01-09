const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors'); 
const PORT = 3000;
const path = require('path'); 

app.use(cors());

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
