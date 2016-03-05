var _ = require('lodash');
var Student = require('../models/studentModel.js');

module.exports = function(app){

	// Create
	app.post('/student', function(req, res){
		var newStudent = new Student(req.body);
		newStudent.save(function(err){
			if (err) {
				res.json({info: 'Error during student creation', error: err});
			}
			res.json({info: 'student created successfully'});
		});
	});

	// Read
	app.get('/student', function(req, res){
		Student.find(function(err, students){
			if (err) {
				res.json({info: 'Error during finding students', error: err});
			}
			res.json({info: 'students found successfully', data: students});

		});
	});

	app.get('/student/:id', function(req, res){
		Student.findById(req.params.id, function(err, student){
			if (err) {
				res.json({info: 'Error during finding student', error: err});
			}
			if (student) {
				res.json({info: 'student found successfully', data: student});
			} else {
				res.json({info: 'student not found'});
			}
		});
	});

	// Update
	app.put('/student/:id', function(req, res){
		Student.findById(req.params.id, function(err, student){
			if (err) {
				res.json({info: 'Error during finding student', error: err});
			}
			if (student) {
				_.merge(student, req.body);
				student.save(function(err){
					if (err) {
						res.json({info: 'Error during finding student', error: err});
					}
					res.json({info: 'student updated successfully'});
				});
			} else {
				res.json({info: 'student not found'});
			}
		});
	});

	// Delete
	app.delete('/student/:id', function(req, res){
		Student.findByIdAndRemove(req.params.id, function(err){
			if (err) {
				res.json({info: 'Error during removing student', error: err});
			}
			res.json({info: 'student removed successfully'});
		});
	});
}