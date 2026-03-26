const http = require('http');

console.log('\n✅ COMPREHENSIVE LOCALHOST TEST\n');

let testsPassed = 0;
let testsFailed = 0;

const tests = [
  {
    name: 'Homepage (GET /)',
    method: 'GET',
    path: '/',
    expectedStatus: 200
  },
  {
    name: 'Symptoms Search (GET /api/symptoms?q=fever)',
    method: 'GET',
    path: '/api/symptoms?q=fever',
    expectedStatus: 200
  },
  {
    name: 'Symptoms Search Empty (GET /api/symptoms?q=)',
    method: 'GET',
    path: '/api/symptoms?q=',
    expectedStatus: 200
  },
  {
    name: 'Disease Prediction (POST /api/predict)',
    method: 'POST',
    path: '/api/predict',
    body: JSON.stringify({ symptoms: ['fever', 'cough'] }),
    expectedStatus: 200
  },
  {
    name: 'Disease Prediction Invalid (POST /api/predict)',
    method: 'POST',
    path: '/api/predict',
    body: JSON.stringify({ symptoms: [] }),
    expectedStatus: 400
  },
  {
    name: 'Static CSS (GET /css/style.css)',
    method: 'GET',
    path: '/css/style.css',
    expectedStatus: 200
  },
  {
    name: 'Static JS (GET /js/main.js)',
    method: 'GET',
    path: '/js/main.js',
    expectedStatus: 200
  }
];

function runTest(test, callback) {
  const opts = {
    hostname: 'localhost',
    port: 5000,
    path: test.path,
    method: test.method,
  };

  if (test.method === 'POST' && test.body) {
    opts.headers = {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(test.body)
    };
  }

  const req = http.request(opts, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      const passed = res.statusCode === test.expectedStatus;
      const status = passed ? '✅' : '❌';
      console.log(`${status} ${test.name}`);
      console.log(`   Status: ${res.statusCode} (expected: ${test.expectedStatus})`);
      
      if (passed) {
        testsPassed++;
      } else {
        testsFailed++;
      }
      
      if (test.method === 'POST' && data) {
        const parsed = JSON.parse(data);
        console.log(`   Response items: ${Array.isArray(parsed) ? parsed.length : 1}`);
      } else if (data.length < 100) {
        console.log(`   Response: ${data.substring(0, 100)}`);
      }
      
      callback();
    });
  });

  req.on('error', err => {
    console.log(`❌ ${test.name}`);
    console.log(`   Error: ${err.message}`);
    testsFailed++;
    callback();
  });

  if (test.body) {
    req.write(test.body);
  }
  req.end();
}

function runTests(tests, index = 0) {
  if (index >= tests.length) {
    console.log(`\n📊 RESULTS: ${testsPassed} passed, ${testsFailed} failed`);
    if (testsFailed === 0) {
      console.log('✅ All tests passed! Application is working correctly.\n');
    } else {
      console.log('❌ Some tests failed. Please check the errors above.\n');
    }
    process.exit(testsFailed > 0 ? 1 : 0);
  } else {
    runTest(tests[index], () => runTests(tests, index + 1));
  }
}

runTests(tests);
