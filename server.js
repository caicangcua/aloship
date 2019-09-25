var express = require('express');
var app = express();
const port = process.env.PORT || 3000

// Enable HTML template middleware
app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname));
// Enable static CSS styles
app.use(express.static('styles'));

// reply to request with "Hello World!"
app.get('/', function (req, res) {
  res.render('index.html');
});

//start a server on port 80 and log its start to our console
var server = app.listen(port, function () {

  var port = server.address().port;
  console.log('Example app listening on port ', port);

});
