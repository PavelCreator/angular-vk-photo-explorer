var express = require('express');
var app = express();
var path = require("path");
var bodyParser = require('body-parser')

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});
app.post('/auth', function (req, res) {
  res.send(req.body);
});
app.listen(8000, function () {
  console.log("Running Express");
});
