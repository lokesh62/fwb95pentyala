var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('addmods', { title: 'addmods' });
  let query = req.query 
  console.log(`rows ${query.rows}`) 
  console.log(`cols ${query.cols}`) 
  res.render('addmods', {title: 'Addmods', query : query})
});

module.exports = router;
