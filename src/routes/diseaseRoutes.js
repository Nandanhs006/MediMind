const express = require('express');
const router = express.Router();

const { predictDisease } = require('../controllers/diseaseController');

router.post('/predict', predictDisease);

module.exports = router;