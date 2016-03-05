var _ = require('lodash');

module.exports = function(app){
	_students = [];

	// Create
	app.post('/student', function(req, res){
		_students.push(req.body);
		res.json({info: 'student created successfully'});
	});

	// Read
	app.get('/student', function(req, res){
		res.send(_students);
	});

	app.get('/student/:id', function(){
		res.send(
				_.find(
						_students,
							{
								name: req.params.id	
							}
					)
			);
	});

	// Update
	app.put('/student/:id', function(req, res){
		var index = _.findIndex(
				_students,
				{
					name: req.params.id
				}
			);
		_.merge(_students[index], req.body);
		res.json({info: 'student updated successfully'});
	});

	// Delete
	app.delete('/student/:id', function(req, res){
		_.remove(_students, function(student){
			return student.name === req.params.id;
		});
		res.json({info: 'student removed successfully'});
	});
}