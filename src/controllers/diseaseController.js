const pool = require('../config/db');

const predictDisease = async (req, res) => {
  const { symptoms } = req.body;

  // Validate input
  if (!symptoms || !Array.isArray(symptoms) || symptoms.length === 0) {
    return res.status(400).json({
      error: 'Please provide a valid symptoms array',
    });
  }

  try {
    console.log(`[PREDICT] Querying diseases for symptoms: ${symptoms.join(', ')}`);
    
    const query = `
      SELECT 
        d.id,
        d.name,
        COUNT(ds.symptom_id) FILTER (WHERE s.name = ANY($1)) * 100.0 
        / COUNT(ds.symptom_id) AS match_percentage
      FROM diseases d
      JOIN disease_symptoms ds ON d.id = ds.disease_id
      JOIN symptoms s ON s.id = ds.symptom_id
      GROUP BY d.id, d.name
      ORDER BY match_percentage DESC;
    `;

    const result = await pool.query(query, [symptoms]);
    console.log(`[PREDICT] Query returned ${result.rows.length} diseases`);

    // Filter + clean response
    const filtered = result.rows
      .filter(d => d.match_percentage > 30)
      .map(d => ({
        id: d.id,
        name: d.name,
        match: parseFloat(d.match_percentage).toFixed(2)
      }));

    if (filtered.length === 0) {
      return res.status(404).json({
        message: 'No matching diseases found',
      });
    }

    res.json(filtered);

  } catch (err) {
    console.error('[PREDICT] Error:', err.message);
    console.error('[PREDICT] Stack:', err.stack);
    res.status(500).json({
      error: 'Internal server error',
    });
  }
};

module.exports = { predictDisease };