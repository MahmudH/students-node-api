var _ = require('lodash');
var Coach = require('../models/coachModel.js');

module.exports = function(app){

	// Create
	app.post('/coach', function(req, res){
		var newCoach = new Coach(req.body);
		newCoach.save(function(err){
			if (err) {
				res.json({info: 'Error during coach creation', error: err});
			}
			res.json({info: 'coach created successfully'});
		});
	});

	// Read
	app.get('/coach', function(req, res){
		Coach.find(function(err, coaches){
			if (err) {
				res.json({info: 'Error during finding coaches', error: err});
			}
			res.json({info: 'coaches found successfully', data: coaches});

		});
	});

	app.get('/coach/:id', function(req, res){
		Coach.findById(req.params.id, function(err, coach){
			if (err) {
				res.json({info: 'Error during finding coach', error: err});
			}
			if (coach) {
				res.json({info: 'coach found successfully', data: coach});
			} else {
				res.json({info: 'coach not found'});
			}
		});
	});

	// Update
	app.put('/coach/:id', function(req, res){
		Coach.findById(req.params.id, function(err, coach){
			if (err) {
				res.json({info: 'Error during finding coach', error: err});
			}
			if (coach) {
				_.merge(coach, req.body);
				coach.save(function(err){
					if (err) {
						res.json({info: 'Error during finding coach', error: err});
					}
					res.json({info: 'coach updated successfully'});
				});
			} else {
				res.json({info: 'coach not found'});
			}
		});
	});

	// Delete
	app.delete('/coach/:id', function(req, res){
	   Coach.findByIdAndRemove(req.params.id, function(err){
			if (err) {
				res.json({info: 'Error during removing coach', error: err});
			}
			res.json({info: 'coach removed successfully'});
		});
	});
}