// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Import comments
const comments = require('./comments');

// Add a route to send all the comments
app.get('/comments', (req, res) => {
  res.send(comments);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});