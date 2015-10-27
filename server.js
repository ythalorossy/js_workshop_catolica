var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var participantes = require('./routes/participantes');

// Static files
app.use("/", express.static('client/'));

app.set('views', __dirname + '/client/views');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Routes

// Root route
app.get('/', function(req, res){
  res.sendfile('index.html', {root: app.settings.views});
});

app.use('/participantes', participantes);

var server = app.listen(process.env.PORT || 3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
