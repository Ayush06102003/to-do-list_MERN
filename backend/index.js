const express = require('express');
const ConnectToMongo = require('./dbConnection');
const todo = require('./routes/todo')
const app = express();
const PORT = 8000;

//database
ConnectToMongo();

app.use(express.json());

app.use(todo);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });