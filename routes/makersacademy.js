var request = require('request').defaults({
    json: true
});

var async = require('async');
var redis = require('redis');
var client = redis.createClient(6379, '127.0.0.1');

module.exports = function(app) {
//   Read
    app.get('/makersacademy', function(req, res) {
        
        async.parallel({
            student: function(callback){
                    request({uri: 'http://localhost:3000/student'}, function (error, response, body) {
                        if (!error && response.statusCode == 200) {
                            callback(null, body);
                        } else {
                            callback({service: 'student', error: error});
                        }
                    });
            },
            coach: function(callback){
                    request({uri: 'http://localhost:3001/coach'}, function (error, response, body) {
                        if (!error && response.statusCode == 200) {
                            callback(null, body);
                        } else {
                            callback({service: 'student', error: error});
                        }
                    });
            }
        },
        function(error, results){
           res.json({
               error: error,
               results: results
           });
        });
        
    });
};