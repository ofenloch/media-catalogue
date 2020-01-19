var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MediaCatalogue' });
  // The views (templates) are stored in the /views directory
  // (as specified in app.js) and are given the file extension .pug.
  // The method Response.render() is used to render a specified template
  // along with the values of named variables passed in an object, and
  // then send the result as a response. In the code below from
  //    /routes/index.js
  // you can see how that route renders a response using the template
  // "index" passing the template variable "title".
});

module.exports = router;