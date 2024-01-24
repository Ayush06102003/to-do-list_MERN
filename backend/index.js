const express = require('express');
const ConnectToMongo = require('./dbConnection');

const app = express();
const PORT = 8000;

//database
ConnectToMongo();

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });