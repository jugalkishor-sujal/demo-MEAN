// app/route-jogging.js
var Jogging = require('./models/jogging');
module.exports = function (app) {
    // create a jogging (accessed at POST http://localhost:2100/joggings)
    app.post('/joggings', function (req, res) {
        console.log('in post');
        var jogging = new Jogging(); 		// create a new instance of the jogging model
        var now = new Date();
        var payLoad = req.body;

        jogging.name = payLoad.name;  // set the joggings name (comes from the request)
        jogging.password = payLoad.password;  // set the joggings password (comes from the request)	    
        jogging.login_time = now;   // set the joggings login_time (current timestamp)
        // save the jogging and check for errors
        jogging.save(function (err) {
            console.log('in save');
            if (err)
                res.send(err);
            res.json({ message: 'Jogging created!' });
            res.send();
        });
    })

    // get all the joggings (accessed at GET http://localhost:2100/joggings)
    app.get('/joggings', function (req, res) {
        console.log('in get');
        Jogging.find(function (err, joggings) {
            if (err)
                res.send(err);
            res.json(joggings);
            res.end();
        });
    });

    // get the jogging with that id (accessed at GET http://localhost:2100/joggings/:jogging_id)
    app.get('/joggings/:jogging_id', function (req, res) {
        console.log('in get');
        Jogging.findById(req.params.jogging_id, function (err, jogging) {
            if (err)
                res.send(err);
            res.json(jogging);
        });
    })

    // update the jogging with this id (accessed at PUT http://localhost:2100/joggings/:jogging_id)
    app.put('/joggings/:jogging_id', function (req, res) {
        console.log('in put');
        // use our jogging model to find the jogging we want
        Jogging.findById(req.params.jogging_id, function (err, jogging) {

            if (err)
                res.send(err);

            var payLoad = req.body;

            jogging.name = payLoad.name;  // set the joggings name (comes from the request)
            jogging.password = payLoad.password;  // set the joggings password (comes from the request)	    
            jogging.login_time = now;   // set the joggings login_time (current timestamp)
            // save the jogging
            jogging.save(function (err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Jogging updated!' });
            });

        });
    })

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
    return app;
};