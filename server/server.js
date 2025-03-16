const express = require('express');
const app = express();
const port = 3001;

// Middleware to parse JSON bodies
app.use(express.json());

// Example API route
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// API route to test the backend
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend API!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
