const express = require('express');
const router = express.Router();

const { predictDisease } = require('../controllers/diseaseController');
const pool = require('../config/db');

// Predict disease route
router.post('/predict', predictDisease);

// Get symptoms (search)
router.get('/symptoms', async (req, res) => {
  const q = req.query.q;

  // Validate query
  if (!q || q.trim() === '') {
    return res.json([]);
  }

  try {
    console.log(`[SYMPTOMS] Searching for: ${q}`);
    
    const result = await pool.query(
      `SELECT name 
       FROM symptoms 
       WHERE name ILIKE $1 
       ORDER BY name 
       LIMIT 10`,
      [`%${q}%`]
    );

    console.log(`[SYMPTOMS] Found ${result.rows.length} matches`);
    res.json(result.rows.map(r => r.name));
  } catch (err) {
    console.error('[SYMPTOMS] Error:', err.message);
    console.error('[SYMPTOMS] Stack:', err.stack);
    res.status(500).json({
      error: 'Internal server error',
    });
  }
});

console.log('Routes loaded');

module.exports = router;