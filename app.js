const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');

// Connect to Database
mongoose.connect('mongodb://localhost');
let db = mongoose.connection;


// Initialize App
const app = express();

// Set Static Public Folder
const static = express.static(__dirname + '/public');
app.use('/public', static);

// Middleware to Recognize JSON in Requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// View Engine Setup: Handlebars (extension .hbs)
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'main' }));
app.set('view engine', 'hbs');

// Configure Routing from ./routes
const configRoutes = require('./routes');
configRoutes(app);

// Run Server
app.listen(3000, () => {
	console.log("Server running.");
	console.log('Routes will be running on http://localhost:3000');
});
