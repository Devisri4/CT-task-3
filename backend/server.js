// backend/server.js
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Backend Microservice!');
});

app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
