const express = require('express');
const ConnectToMongo = require('./dbConnection');
const todo = require('./routes/todo')
const cors = require('cors')

 
const app = express();
const PORT = 8000;

//database
ConnectToMongo();

app.use(cors())
app.use(express.json());


app.use('/.netlify/functions/index', todo); // Adjust the route based on your needs

// Export the Express app for Netlify functions
module.exports = app;