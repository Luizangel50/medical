var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/api/hello', (req, res) => {
  res.send({ express: `Hello From Express, ${path.join(__dirname)}` });
});

router.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

module.exports = router;