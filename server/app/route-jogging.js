﻿// app/route-jogging.js
var Jogging = require('./models/jogging');
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
    // create a jogging (accessed at POST http://localhost:2100/joggings)
    app.post('/joggings', function (req, res) {
        var jogging = new Jogging(); 		// create a new instance of the jogging model       
        var payLoad = req.body;

        jogging.name = payLoad.name;  // set the joggings name (comes from the request)
        jogging.distance = payLoad.distance;  // set the joggings distance (comes from the request)	    
        jogging.date = payLoad.date;   // set the joggings date (current timestamp)
        jogging.time = payLoad.time;  // set the joggings time (current timestamp)
        // save the jogging and check for errors
        jogging.save(function (err) {
            if (err)
                res.send(err);
            res.json({ message: 'Jogging created!' });
            res.send();
        });
    })

    // get all the joggings (accessed at GET http://localhost:2100/joggings)
    app.get('/joggings', function (req, res) {
        Jogging.find(function (err, joggings) {
            if (err)
                res.send(err);
            res.json(joggings);
            res.end();
        });
    });

    // get the jogging with that id (accessed at GET http://localhost:2100/joggings/:jogging_id)
    app.get('/joggings/:jogging_id', function (req, res) {
        Jogging.findById(req.params.jogging_id, function (err, jogging) {
            if (err)
                res.send(err);
            res.json(jogging);
        });
    });

    // update the jogging with this id (accessed at PUT http://localhost:2100/joggings/:jogging_id)
    app.put('/joggings/:jogging_id', function (req, res) {
        // use our jogging model to find the jogging we want
        var payLoad = req.body;
        Jogging.findById(req.params.jogging_id, function (err, jogging) {
            if (err)
                res.send(err);
            jogging.name = payLoad.name;  // set the joggings name (comes from the request)
            jogging.distance = payLoad.distance;  // set the joggings distance (comes from the request)	    
            jogging.date = payLoad.date;   // set the joggings date (current timestamp)
            jogging.time = payLoad.time;  // set the joggings time (current timestamp)

            // save the jogging
            jogging.save(function (err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Jogging updated!' });
            });

        });
    });

    // delete the jogging with this id (accessed at DELETE http://localhost:2100/joggings/:jogging_id)
    app.delete('/joggings/:jogging_id', function (req, res) {
        console.log('in delete');
        Jogging.remove({
            _id: req.params.jogging_id
        }, function (err, jogging) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });

    // get the user with that id (accessed at GET http://localhost:2100/joggings/list)
    app.post('/joggings/list', function (req, res) {
        var payLoad = req.body;
        Jogging.find({ name: payLoad.name}, function (err, result) {
            if (err)
                res.send(err);
            res.json(result);
        });
    });
};