var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



//router for register page
router.get('/signup', function(req, res, next){
  res.render('signup', { title: 'Sign up Form' })
})



// router.get('/home', function(req, res, next){
//   res.render('index', { title: 'Sign up Form' })
// })

module.exports = router;
