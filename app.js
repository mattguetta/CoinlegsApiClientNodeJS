var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
 
 app.use(bodyParser.urlencoded({extended: true}));
 app.use(bodyParser.json());
 
app.listen(5000, function(){
   console.log("Listening 5000...");
});

app.post('/api/notification/listen', function(request, response){
  var notification = request.body;
  console.log(notification);
  response.status(200).send();
});