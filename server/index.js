// index.js
const express = require('express');
const db = require('./db'); // Import the db.js to use the PostgreSQL client
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.get('/api/posts', async (req, res) => {
  try {
    // Fetching posts from the PostgreSQL database
    const result = await db.query('SELECT * FROM posts');  // Use db from db.js
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching posts:', err);
    res.status(500).send('Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
