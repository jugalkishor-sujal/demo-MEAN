// app/route-user.js
var User = require('./models/user');
module.exports = function (app) {
    // middleware to use for all requests
    app.use(function (req, res, next) {
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
    // create a user (accessed at POST http://localhost:2100/users)
    app.post('/users', function (req, res) {
        console.log('in post');
        var user = new User(); 		// create a new instance of the user model
        var now = new Date();
        var payLoad = req.body;

        user.name = payLoad.name;  // set the users name (comes from the request)
        user.password = payLoad.password;  // set the users password (comes from the request)	    
        user.login_time = now;   // set the users login_time (current timestamp)
        // save the user and check for errors
        user.save(function (err) {
            console.log('in save');
            if (err)
                res.send(err);
            res.json({ message: 'User created!' });
            res.send();
        });
    });

    // get all the users (accessed at GET http://localhost:2100/users)
    app.get('/users', function (req, res) {
        console.log('in get');
        User.find(function (err, users) {
            if (err)
                res.send(err);
            res.json(users);
            res.end();
        });
    });

    // get the user with that id (accessed at GET http://localhost:2100/users/:user_id)
    app.get('/users/:user_id', function (req, res) {
        console.log('in get');
        User.findById(req.params.user_id, function (err, user) {
            if (err)
                res.send(err);
            res.json(user);
        });
    });

    // update the user with this id (accessed at PUT http://localhost:2100/users/:user_id)
    app.put('/users/:user_id', function (req, res) {
        console.log('in put');
        // use our user model to find the user we want
        User.findById(req.params.user_id, function (err, user) {

            if (err)
                res.send(err);

            var payLoad = req.body;

            user.name = payLoad.name;  // set the users name (comes from the request)
            user.password = payLoad.password;  // set the users password (comes from the request)	    
            user.login_time = now;   // set the users login_time (current timestamp)
            // save the user
            user.save(function (err) {
                if (err)
                    res.send(err);

                res.json({ message: 'User updated!' });
            });

        });
    });

    // delete the user with this id (accessed at DELETE http://localhost:2100/users/:user_id)
    app.delete('/users/:user_id', function (req, res) {
        console.log('in delete');
        User.remove({
            _id: req.params.user_id
        }, function (err, user) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });
};