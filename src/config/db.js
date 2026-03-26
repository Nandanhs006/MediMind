const { Pool } = require('pg');
require('dotenv').config({
  path: process.env.NODE_ENV === 'production' ? '.env' : '.env.development'
});

// Log configuration status for debugging
console.log(`[CONFIG] NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`[CONFIG] DB_HOST: ${process.env.DB_HOST ? 'SET' : 'MISSING'}`);
console.log(`[CONFIG] DB_USER: ${process.env.DB_USER ? 'SET' : 'MISSING'}`);

// Configure connection
const poolConfig = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD || process.env.DB_PASS,
  port: parseInt(process.env.DB_PORT, 10),
};

// Neon cloud always requires SSL
if (process.env.DB_SSL === 'require') {
  poolConfig.ssl = {
    rejectUnauthorized: false,
  };
}

const pool = new Pool(poolConfig);

pool.on('connect', () => {
  console.log('Connected to PostgreSQL');
});

pool.on('error', (err) => {
  console.error('Unexpected PostgreSQL error:', err);
  // Don't exit - allow app to continue for GitHub Pages frontend
});

const testConnection = async () => {
  try {
    await pool.query('SELECT 1');
    console.log('Database connection test successful');
  } catch (err) {
    console.error('Database connection warning:', err.message);
    // Don't exit - allow app to continue without database
  }
};

testConnection();

module.exports = pool;