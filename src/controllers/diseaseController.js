const pool = require('../config/db');

const predictDisease = async (req, res) => {
  const { symptoms } = req.body;

  try {
    const query = `
      SELECT 
        d.name,
        COUNT(ds.symptom_id) FILTER (WHERE s.name = ANY($1)) * 100.0 
        / COUNT(ds.symptom_id) AS match_percentage
      FROM diseases d
      JOIN disease_symptoms ds ON d.id = ds.disease_id
      JOIN symptoms s ON s.id = ds.symptom_id
      GROUP BY d.name
      ORDER BY match_percentage DESC;
    `;

    const result = await pool.query(query, [symptoms]);

    const filtered = result.rows.filter(d => d.match_percentage > 30);

    res.json(filtered);

  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { predictDisease };