const http = require('http');

// Test 1: GET /api/symptoms
console.log('\n🧪 Testing GET /api/symptoms?q=fever');
const req1 = http.get('http://localhost:5000/api/symptoms?q=fever', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('Status:', res.statusCode);
    console.log('Response:', data);
    
    // Test 2: POST /api/predict
    console.log('\n🧪 Testing POST /api/predict');
    const postData = JSON.stringify({ symptoms: ['fever', 'cough'] });
    
    const opts = {
      hostname: 'localhost',
      port: 5000,
      path: '/api/predict',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };
    
    const req2 = http.request(opts, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        console.log('Status:', res.statusCode);
        console.log('Response:', data);
        process.exit(0);
      });
    });
    
    req2.on('error', err => {
      console.error('Error:', err.message);
      process.exit(1);
    });
    
    req2.write(postData);
    req2.end();
  });
});

req1.on('error', err => {
  console.error('Error:', err.message);
  process.exit(1);
});
