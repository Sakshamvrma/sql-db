require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.PGUSER || 'your_user',        // Replace with your PostgreSQL username
  host: process.env.PGHOST || 'localhost',            // Replace with your PostgreSQL server host
  database: process.env.PGDATABASE || 'mydatabase',   // Replace with your PostgreSQL database name
  password: process.env.PGPASSWORD || 'your_password',// Replace with your PostgreSQL password
  port: process.env.PGPORT || 5432,                   // Replace with your PostgreSQL server port
});

pool.connect((err) => {
  if (err) {
    console.error('Error connecting to the database', err);
  } else {
    console.log('Connected to the database');
  }
});

module.exports = pool;
