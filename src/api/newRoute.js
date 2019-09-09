const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'This shit is hard. 8=====D~~'
  });
});

module.exports = router;
