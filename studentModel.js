var mongoose = require('mongoose');

var studentSchema = mongoose.Schema({
	name: String,
	favouriteLanguage: String,
	cohort: String
});

module.exports = mongoose.model('Student', studentSchema);