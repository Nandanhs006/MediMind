const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT, 10),
  ssl: process.env.DB_SSL === 'require' ? { rejectUnauthorized: false } : false
});

pool.query('SELECT table_name FROM information_schema.tables WHERE table_schema = $1', ['public'], (err, res) => {
  if (err) {
    console.error('Error:', err.message);
  } else {
    console.log('\n📊 Current Database Tables:');
    if (res.rows.length === 0) {
      console.log('  ⚠️  No tables found - schema needs initialization');
    } else {
      res.rows.forEach(row => console.log('  ✓', row.table_name));
    }
  }
  pool.end();
});
