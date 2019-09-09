const express = require('express');

const emojis = require('./emojis');
const newRoute = require('./newRoute');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/emojis', emojis);
router.use('/newRoute', newRoute); // Establishes 'newRoute' as new route.

module.exports = router;
