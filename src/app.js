const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());

// Serve static files from public folder
app.use(express.static(path.join(__dirname, '../public')));

// Routes
const diseaseRoutes = require('./routes/diseaseRoutes');
app.use('/api', diseaseRoutes);

module.exports = app;