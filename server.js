//Dependencies
const express = require('express');
const app = express();
const morgan = require('morgan');

const port = process.env.PORT || 3000; //Store server port

app.use(morgan("dev")); //Log server requests

//Create the server
app.listen(port, function(){
	console.log('Listening on port '+port);
});