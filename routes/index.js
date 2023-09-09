var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("GET method called")
  res.render('index', { title: 'Express' });
});

// home page
router.get('/home', function(req, res){
  console.log("home route called");
  res.render('home1', {title : 'Home'});
})


// for post data 
router.post('/', function(req, res, next) {
  console.log("POST method called",req.body);
  const email = req.body.email; 
  const pass = req.body.password;

  console.log('--email--', email);
  console.log('--pass--', pass);


  // server logic for login

  if(email != 'Test@123.com' || pass != '12345'){
    // return res.json({message : 'Error in Username or Password, Please try again..'});
    res.render('error', { title: 'Login Fail..' });
  }else {
    // return res.json({message : 'Login Success..'});
    // res.render('home', { title: 'Login Success' });
    res.redirect('/home');
  }


  
});





//router for register page
router.get('/signup', function(req, res, next){
  res.render('signup', { title: 'Sign up Form' })
})



// router.get('/home', function(req, res, next){
//   res.render('index', { title: 'Sign up Form' })
// })

module.exports = router;
