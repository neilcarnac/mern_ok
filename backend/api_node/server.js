const express = require('express');
const app = express();
const port = 3000; // Choose a port for your server

// Define a simple weather API endpoint
app.get('/', (req, res) => {
  // Return a static weather message as plain text
  res.setHeader('Content-Type', 'text/plain');
  res.send("Weather is sunny today");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
