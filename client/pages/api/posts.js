import { Client } from 'pg';

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

client.connect();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const result = await client.query('SELECT * FROM posts');
      res.status(200).json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else if (req.method === 'POST') {
    const { title, content } = req.body;
    try {
      const result = await client.query(
        'INSERT INTO posts(title, content) VALUES($1, $2) RETURNING *',
        [title, content]
      );
      res.status(201).json(result.rows[0]);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
