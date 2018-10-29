var express = require('express'),
  ejs = require('ejs'),
  cors = require('cors'),
  morgan = require('morgan'); // log all request

var app = express();
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
var ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

// var corsOptions = {
//   origin: 'http://10.44.11.80:1880',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

// app.get('/spi2/sensor_list', cors(corsOptions), function (req, res, next) {
//   res.json({ msg: 'This is CORS-enabled for a whitelisted domain.' })
// })

// app.listen(80, function () {
//   console.log('CORS-enabled web server listening on port 80')
// })

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.engine('html', ejs.renderFile);
app.use(morgan('combined'));

app.get('/login', function (req, res, next) {
  res.render('../dist/angular6/index.html');
});

app.get('/', function (req, res, next) {
  res.render('../dist/angular6/index.html');
});

app.get('/dashboard', function (req, res, next) {
  res.render('../dist/angular6/index.html');
});

app.get('/path-management', function (req, res, next) {
  res.render('../dist/angular6/index.html');
});

app.get('/alert-management', function (req, res, next) {
  res.render('../dist/angular6/index.html');
});

//The 404 Route (ALWAYS Keep this as the last route)
// app.get('**', function (req, res) {
//   res.send('<pre>SPI-2.0: P@g3 d035n\'T 3X!5T!</pre><a href="/dashboard">here</a>', 404);
// });

app.use(express.static(__dirname + "/dist/angular6/"));

// error handling
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something bad happened!');
});

app.listen(port, ip, function () {
  console.log('Server running on http://%s:%s', ip, port);
});