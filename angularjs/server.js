var express = require('express');
var app     = express();

app.use('/', express.static(__dirname + '/'))

app.get('/angularjs',function(req,res){
  res.sendfile('src/index.html');
});

app.get('/ng/*', function (req, res) {
  res.sendfile('ng-app/index.html');
});
 
app.listen(9000, function() {
    console.log("Listening on 9000");
});