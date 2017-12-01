var express = require('express'),
    cors = require('cors'),
    app = express(),
    port = process.env.PORT || 6969,
    // mongoose = require('mongoose'),
    Task = require('./models/todoListModel'), //created model loading here
    bodyParser = require('body-parser');

// mongoose instance connection url connection
//mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost/Tododb');

app.use(cors())

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


var routes = require('./routes/todoListRoutes'); //importing route
routes(app); //register the route


app.listen(port, '0.0.0.0');


console.log('todo list RESTful API server started on: ' + port);
