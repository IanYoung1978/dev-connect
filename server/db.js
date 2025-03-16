// db.js
const { Client } = require('pg');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Create the PostgreSQL client using environment variables
const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,  // Make sure it's DB_NAME here (not DB_DATABASE)
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Connect to PostgreSQL
client.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch((err) => console.error('Failed to connect to PostgreSQL:', err));

module.exports = client;
