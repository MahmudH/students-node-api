var r = require('request').defaults({
    json: true
});

module.exports = function(app) {
//   Read
    app.get('/makersacademy', function(req, res){
        r({uri: 'http://localhost:3001/coach'}, function(error, response, body){
           if (!error && response.statusCode === 200) {
               res.json(body);
           } else {
               res.send(response.statusCode);
           }
        });
    });
};