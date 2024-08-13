const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3001;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

import data from './data.json';

// Route to handle POST requests
app.post('/', (req, res) => {
  const operatorId = req.body.operator_id;
  if (operatorId === "bruno") {
    res.json(data);
  } else {
    res.status(404).json({ error: 'Operator not found' });
  }
});

// Handle invalid routes and methods
app.all('*', (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
  } else {
    res.status(404).json({ error: 'Not Found' });
  }
});

app.listen(3001, () => console.log('Server ready on port 3001.'));

module.exports = app;