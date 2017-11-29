const express = require('express');
const router = express.Router();
const Article = require('../models/Article.js');

//======================================
//Server routes the application will use
//======================================

//Homepage GET method
router.get('/', function(req, res){
	Article.find({}, function(err, docs1){
		var articlesObject = {
			articles: docs1
		};
		res.render('index', articlesObject);
	});

});

//======================================

//Export the router
module.exports = router;