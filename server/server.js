// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express = require('express'); 		// call express
var app = express(); 				// define our app using express
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var database = require('./config/database'); 			// load the database config
var port = process.env.PORT || 2100; 		// set our port
var host = process.env.HOST || 'localhost';// set our host
var router = express.Router(); 				// get an instance of the express Router


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));// parse application/x-www-form-urlencoded
app.use(bodyParser.json());// parse application/json
mongoose.connect(database.url); 	// connect to mongoDB database on modulus.io



// middleware to use for all requests
router.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.JSON = true;
    // do logging    
    console.log(req.method);
    console.log('Body');
    console.log(req.body);
    console.log('Parameters');
    console.log(req.params);
    
    next(); // make sure we go to the next routes and don't stop here
});
// more routes for our API will happen here
// ---------------------USER-------------------------------
require('./app/route-user.js')(app);// on routes in app/route-user.js that end in /user

// ---------------------JOGGING-------------------------------
require('./app/route-jogging.js')(app);// on routes in app/route-jogging.js that end in /jogging


// test route to make sure everything is working (accessed at GET http://localhost:2100/api)
router.get('/', function (req, res) {
    res.json({ message: 'Welcome to jogging REST API!' });
});

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('http-server running on '+ host +':' + port);


if (process.platform !== 'win32') {
  //
  // Signal handlers don't work on Windows.
  //
  process.on('SIGINT', function () {
    console.log('http-server stopped.');
    process.exit();
  });
}