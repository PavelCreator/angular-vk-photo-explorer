var express = require('express');
var app = express();
var path = require("path");
var bodyParser = require('body-parser');

var Flickr = require("flickrapi"),
    flickrOptions = {
      api_key: "8a2c77f11af4c3388a7524c13db8ef2f",
      secret: "32760c1ea1c6ecbe"
    };

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/auth', function (req, res) {
  Flickr.authenticate(flickrOptions, function (error, flickr) {

  });
});

app.post('/auth', function (req, res) {
  flickr.oauth_verifier = req.body.authCode;
  res.send(req.body);
});


app.listen(8000, function () {
  console.log("Running Express");
});
