var mongoose = require("mongoose")
var Schema = mongoose.Schema;

//create Article Schema
var ArticleSchema = new Schema({
	//title is a required string
	title:{
		type: String,
		required: true
	},
	//summary is a required string
	summary:{
		type: String,
		required: true
	},
	//link is a required string
	link:{
		type: String,
		required: true
	},
	comment: {
		type: Schema.Types.ObjectId,
		ref: "Comment"
	}
});
//create Article model with the ArticleSchema
var Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;//export the model