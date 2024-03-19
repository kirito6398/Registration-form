
const express = require('express');
const mysql = require('mysql');

const app = express();
const port = process.env.PORT || 5000;

// MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'register',
  password: '',
  database: 'code_snippets'
});

connection.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

// Middleware to parse JSON bodies
app.use(express.json());

// API endpoint to submit code snippet
app.post('/submit', (req, res) => {
  const { username, language, stdin, code } = req.body;
  const timestamp = new Date().toISOString();
  
  const sql = 'INSERT INTO code_snippets (username, language, stdin, code, timestamp) VALUES (?, ?, ?, ?, ?)';
  connection.query(sql, [username, language, stdin, code, timestamp], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to submit code snippet' });
    } else {
      res.status(201).json({ message: 'Code snippet submitted successfully' });
    }
  });
});

// API endpoint to retrieve code snippets
app.get('/snippets', (req, res) => {
  const sql = 'SELECT username, language, stdin, LEFT(code, 100) AS code_preview, timestamp FROM code_snippets';
  connection.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to retrieve code snippets' });
    } else {
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
