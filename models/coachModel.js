var mongoose = require('mongoose');

var coachSchema = mongoose.Schema({
	name: String,
	favouriteLanguage: String
});

module.exports = mongoose.model('Coach', coachSchema);