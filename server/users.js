const express = require('express');
const router = express.Router();
const db = require('./db');

// A simple GET route to fetch users from the database
router.get('/users', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM users');
    res.json(result.rows); // Respond with the rows from the "users" table
  } catch (err) {
    console.error('Error fetching users', err.stack);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
