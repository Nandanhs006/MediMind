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

const schema = `
-- Create symptoms table
CREATE TABLE IF NOT EXISTS symptoms (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE
);

-- Create diseases table
CREATE TABLE IF NOT EXISTS diseases (
  id SERIAL PRIMARY KEY,
  name VARCHAR(150) NOT NULL UNIQUE,
  description TEXT
);

-- Create disease_symptoms junction table
CREATE TABLE IF NOT EXISTS disease_symptoms (
  disease_id INT NOT NULL REFERENCES diseases(id) ON DELETE CASCADE,
  symptom_id INT NOT NULL REFERENCES symptoms(id) ON DELETE CASCADE,
  PRIMARY KEY (disease_id, symptom_id)
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_symptoms_name ON symptoms(name);
CREATE INDEX IF NOT EXISTS idx_diseases_name ON diseases(name);
`;

const sampleData = `
-- Insert sample symptoms
INSERT INTO symptoms (name) VALUES 
  ('fever'),
  ('cough'),
  ('headache'),
  ('sore throat'),
  ('body ache'),
  ('fatigue'),
  ('shortness of breath'),
  ('runny nose'),
  ('sneezing'),
  ('chills'),
  ('weakness'),
  ('loss of taste'),
  ('loss of smell'),
  ('diarrhea'),
  ('nausea'),
  ('vomiting'),
  ('congestion'),
  ('chest pain'),
  ('muscle pain'),
  ('joint pain')
ON CONFLICT (name) DO NOTHING;

-- Insert sample diseases
INSERT INTO diseases (name, description) VALUES
  ('Common Cold', 'A mild respiratory infection caused by various viruses'),
  ('COVID-19', 'A respiratory illness caused by the SARS-CoV-2 virus'),
  ('Influenza (Flu)', 'A contagious respiratory illness caused by influenza viruses'),
  ('Pneumonia', 'An infection that inflames the lungs causing fluid-filled sacs'),
  ('Bronchitis', 'Inflammation of the air passages in the lungs'),
  ('Allergic Rhinitis', 'Allergic inflammation of the nasal passages'),
  ('Sinusitis', 'Inflammation of the sinuses'),
  ('Gastroenteritis', 'Inflammation of the stomach and intestines'),
  ('Migraine', 'A neurological condition characterized by intense headaches')
ON CONFLICT (name) DO NOTHING;

-- Insert disease-symptom relationships
-- Common Cold
INSERT INTO disease_symptoms (disease_id, symptom_id) SELECT d.id, s.id FROM diseases d, symptoms s
  WHERE d.name = 'Common Cold' AND s.name IN ('cough', 'runny nose', 'sneezing', 'sore throat', 'fatigue')
  ON CONFLICT DO NOTHING;

-- COVID-19
INSERT INTO disease_symptoms (disease_id, symptom_id) SELECT d.id, s.id FROM diseases d, symptoms s
  WHERE d.name = 'COVID-19' AND s.name IN ('fever', 'cough', 'fatigue', 'loss of taste', 'loss of smell', 'shortness of breath', 'headache')
  ON CONFLICT DO NOTHING;

-- Influenza (Flu)
INSERT INTO disease_symptoms (disease_id, symptom_id) SELECT d.id, s.id FROM diseases d, symptoms s
  WHERE d.name = 'Influenza (Flu)' AND s.name IN ('fever', 'cough', 'body ache', 'fatigue', 'headache', 'chills', 'sore throat')
  ON CONFLICT DO NOTHING;

-- Pneumonia
INSERT INTO disease_symptoms (disease_id, symptom_id) SELECT d.id, s.id FROM diseases d, symptoms s
  WHERE d.name = 'Pneumonia' AND s.name IN ('fever', 'cough', 'shortness of breath', 'chest pain', 'fatigue')
  ON CONFLICT DO NOTHING;

-- Bronchitis
INSERT INTO disease_symptoms (disease_id, symptom_id) SELECT d.id, s.id FROM diseases d, symptoms s
  WHERE d.name = 'Bronchitis' AND s.name IN ('cough', 'shortness of breath', 'chest pain', 'fatigue', 'headache')
  ON CONFLICT DO NOTHING;

-- Allergic Rhinitis
INSERT INTO disease_symptoms (disease_id, symptom_id) SELECT d.id, s.id FROM diseases d, symptoms s
  WHERE d.name = 'Allergic Rhinitis' AND s.name IN ('runny nose', 'sneezing', 'congestion', 'sore throat')
  ON CONFLICT DO NOTHING;

-- Sinusitis
INSERT INTO disease_symptoms (disease_id, symptom_id) SELECT d.id, s.id FROM diseases d, symptoms s
  WHERE d.name = 'Sinusitis' AND s.name IN ('congestion', 'headache', 'sore throat', 'cough')
  ON CONFLICT DO NOTHING;

-- Gastroenteritis
INSERT INTO disease_symptoms (disease_id, symptom_id) SELECT d.id, s.id FROM diseases d, symptoms s
  WHERE d.name = 'Gastroenteritis' AND s.name IN ('nausea', 'vomiting', 'diarrhea', 'weakness', 'fatigue')
  ON CONFLICT DO NOTHING;

-- Migraine
INSERT INTO disease_symptoms (disease_id, symptom_id) SELECT d.id, s.id FROM diseases d, symptoms s
  WHERE d.name = 'Migraine' AND s.name IN ('headache', 'nausea', 'weakness')
  ON CONFLICT DO NOTHING;
`;

async function initializeDatabase() {
  try {
    console.log('🔄 Creating schema...');
    await pool.query(schema);
    console.log('✅ Schema created successfully\n');

    console.log('🔄 Inserting sample data...');
    await pool.query(sampleData);
    console.log('✅ Sample data inserted successfully\n');

    // Verify
    const symptomCount = await pool.query('SELECT COUNT(*) FROM symptoms');
    const diseaseCount = await pool.query('SELECT COUNT(*) FROM diseases');
    const relationshipCount = await pool.query('SELECT COUNT(*) FROM disease_symptoms');

    console.log('📊 Database Summary:');
    console.log(`  ✓ Symptoms: ${symptomCount.rows[0].count}`);
    console.log(`  ✓ Diseases: ${diseaseCount.rows[0].count}`);
    console.log(`  ✓ Disease-Symptom Relationships: ${relationshipCount.rows[0].count}`);
    console.log('\n✅ Database initialization complete!');
    
  } catch (err) {
    console.error('❌ Error initializing database:', err.message);
    process.exit(1);
  } finally {
    pool.end();
  }
}

initializeDatabase();
