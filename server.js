//Dependencies
const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');

const port = process.env.PORT || 3000; //Store server port

app.use(morgan("dev")); //Log server requests

//Handlebars
app.engine('handlebars', exphbs({ defaultLayout : 'main' }));
app.set('view engine', 'handlebars');

//MongoDB config
mongoose.Promise = Promise; //set mongoose to leverage built in JS ES6 promises
const db = mongoose.connection;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/news-scraper");
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

//Use routes
const routes = require('./controllers/articles_controller.js');
app.use('/', routes);

//Create the server
app.listen(port, function(){
	console.log('Listening on port '+port);
});