const path = require('path');
const compression = require('compression');
const express = require('express');
const app = express();


app.set('port', (process.env.PORT || 8080));

// If an incoming request uses
// a protocol other than HTTPS,
// redirect that request to the
// same url but with HTTPS
const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(['https://', req.get('Host'), req.url].join(''));
    }
    next();
  }
}

// Instruct the app
// to use the forceSSL
// middleware
// TODO: should comment for local testing
app.use(forceSSL());

// Gzip
app.use(compression());

// Run the app by serving the static files
// in the dist directory
app.use('/', express.static(__dirname + '/dist'));

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// Start the app by listening on the default
// Heroku port
app.listen(app.get('port'), function() {
  console.log('Text-to-Learn App listening on port ' + app.get('port'));
});
