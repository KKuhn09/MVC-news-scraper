var mongoose = require("mongoose");
var Schema = mongoose.Schema;//Store the Schema class
//create the note schema
var CommentSchema = new Schema({
	title:{
		type: String
	},
	body:{
		type: String
	}
});
//create the comment model with CommentSchema
var Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;//export the model