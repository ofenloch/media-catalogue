var express = require('express');
var router = express.Router();

var userlist = require('../assets/userlist.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('GET /users : respond with a list of all users');
  res.type('application/json');
  res.send(userlist);
});

// Create a new route that will display the text "You're so cool!" at
// URL /users/cool/. Test it by running the server and visiting
// http://localhost:3000/users/cool/ in your browser
/* GET user's coolness. */
router.get('/cool', function(req, res, next) {
  res.send('You\'re so cool!');
});

/* GET user with userId */
router.get('/:userId', function(req, res, next) {
  let userId = req.params.userId;
  console.log('GET /users/' + userId + ' : respond with data for user with id ' + userId);
  res.type('application/json');
  res.send(userlist[userId]);
});

/* POST ... */
router.post('/user', function (req, res) {
  res.send('POST /users/user : got a POST request at /user')
})

/* PUT ... */
router.put('/user', function (req, res) {
  res.send('PUT /users/user : got a PUT request at /user')
})

/* DELETE ... */
router.delete('/user/:userID', function (req, res) {
  let userId = req.params.userId;
  res.send('DELETE /users/user/' + userId + ' : got a DELETE request at /user for user with id ' +  userId);
})


module.exports = router;