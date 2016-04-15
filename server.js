var express = require('express');
var app = express();
var path = require("path");
var bodyParser = require('body-parser');

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

var getJsonFromJsonP = function (url, callback) {
  req(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var jsonpData = body;
      var json;
      //if you don't know for sure that you are getting jsonp, then i'd do something like this
      try {
        json = JSON.parse(jsonpData);
      }
      catch (e) {
        var startPos = jsonpData.indexOf('({');
        var endPos = jsonpData.indexOf('})');
        var jsonString = jsonpData.substring(startPos + 1, endPos + 1);
        json = JSON.parse(jsonString);
      }
      callback(null, json);
    } else {
      callback(error);
    }
  })
}

var authData = Object.create(null);
authData.client_id = 5414170;
authData.client_secret = 'JwA09uvo3hLD7HOBRNm9';

app.post('/auth', function (req, res) {
  console.log(req);

  var access_token_url =
    'https://oauth.vk.com/access_token' +
    '?client_id=' + authData.client_id +
    '&client_secret=' + authData.client_secret +
    '&redirect_uri=' + req.data('redirect_uri') +
    '&code=' + req.data('code');

  getJsonFromJsonP(access_token_url, function (err, data) {
    console.log('data', data);
    res.send(data);
  });
});


app.listen(8000, function () {
  console.log("Running Express");
});
