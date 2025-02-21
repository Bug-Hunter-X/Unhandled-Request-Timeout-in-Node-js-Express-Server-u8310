const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // This will cause an error if the request takes too long to process
  // and the connection gets closed before the response is sent
  setTimeout(() => {
    res.send('Hello World!');
  }, 10000); // Simulate a long-running task
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});