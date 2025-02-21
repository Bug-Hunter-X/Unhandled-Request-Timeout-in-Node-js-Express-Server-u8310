const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Set a timeout for the response
  res.setTimeout(15000, () => {
    res.status(500).send('Request timed out');
  });
  setTimeout(() => {
    res.send('Hello World!');
  }, 10000); // Simulate a long-running task
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});