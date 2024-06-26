const express = require('express');
const app = express();
const fs = require('fs');

app.get('/jobs', (req, res) => {
  fs.readFile('jobs.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading file');
      return;
    }
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

