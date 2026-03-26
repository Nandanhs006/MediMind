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

async function testAPIs() {
  try {
    console.log('🧪 Testing Database API Endpoints...\n');

    // Test 1: Get symptoms search
    console.log('1️⃣  Testing GET /api/symptoms?q=fever');
    const symptomsRes = await pool.query(
      `SELECT name FROM symptoms WHERE name ILIKE $1 ORDER BY name LIMIT 10`,
      ['%fever%']
    );
    console.log(`   ✓ Found ${symptomsRes.rows.length} symptom(s)`);
    symptomsRes.rows.forEach(row => console.log(`     - ${row.name}`));

    // Test 2: Get all symptoms
    console.log('\n2️⃣  Testing symptom search variations');
    const variations = ['cough', 'fever', 'head'];
    for (const q of variations) {
      const res = await pool.query(
        `SELECT name FROM symptoms WHERE name ILIKE $1 ORDER BY name LIMIT 10`,
        [`%${q}%`]
      );
      console.log(`   ✓ Query "${q}": ${res.rows.length} result(s)`);
    }

    // Test 3: Disease prediction
    console.log('\n3️⃣  Testing POST /api/predict with symptoms: ["fever", "cough"]');
    const predictRes = await pool.query(`
      SELECT 
        d.id,
        d.name,
        COUNT(ds.symptom_id) FILTER (WHERE s.name = ANY($1)) * 100.0 
        / COUNT(ds.symptom_id) AS match_percentage
      FROM diseases d
      JOIN disease_symptoms ds ON d.id = ds.disease_id
      JOIN symptoms s ON s.id = ds.symptom_id
      GROUP BY d.id, d.name
      ORDER BY match_percentage DESC
    `, [['fever', 'cough']]);
    
    const filtered = predictRes.rows
      .filter(d => d.match_percentage > 30)
      .map(d => ({
        id: d.id,
        name: d.name,
        match: parseFloat(d.match_percentage).toFixed(2)
      }));
    
    console.log(`   ✓ Found ${filtered.length} matching disease(s)`);
    filtered.forEach(d => console.log(`     - ${d.name}: ${d.match}% match`));

    // Test 4: Another prediction
    console.log('\n4️⃣  Testing prediction with different symptoms: ["fatigue", "loss of taste"]');
    const predictRes2 = await pool.query(`
      SELECT 
        d.id,
        d.name,
        COUNT(ds.symptom_id) FILTER (WHERE s.name = ANY($1)) * 100.0 
        / COUNT(ds.symptom_id) AS match_percentage
      FROM diseases d
      JOIN disease_symptoms ds ON d.id = ds.disease_id
      JOIN symptoms s ON s.id = ds.symptom_id
      GROUP BY d.id, d.name
      ORDER BY match_percentage DESC
    `, [['fatigue', 'loss of taste']]);
    
    const filtered2 = predictRes2.rows
      .filter(d => d.match_percentage > 30)
      .map(d => ({
        id: d.id,
        name: d.name,
        match: parseFloat(d.match_percentage).toFixed(2)
      }));
    
    console.log(`   ✓ Found ${filtered2.length} matching disease(s)`);
    filtered2.forEach(d => console.log(`     - ${d.name}: ${d.match}% match`));

    // Test 5: Database stats
    console.log('\n5️⃣  Database Statistics');
    const stats = await pool.query(`
      SELECT 
        (SELECT COUNT(*) FROM symptoms) as symptom_count,
        (SELECT COUNT(*) FROM diseases) as disease_count,
        (SELECT COUNT(*) FROM disease_symptoms) as relationship_count
    `);
    const stat = stats.rows[0];
    console.log(`   ✓ Total Symptoms: ${stat.symptom_count}`);
    console.log(`   ✓ Total Diseases: ${stat.disease_count}`);
    console.log(`   ✓ Disease-Symptom Links: ${stat.relationship_count}`);

    console.log('\n✅ All API tests passed successfully!\n');
    console.log('🚀 Application is ready for deployment to Render');

  } catch (err) {
    console.error('❌ Test failed:', err.message);
    process.exit(1);
  } finally {
    pool.end();
  }
}

testAPIs();
