var express    = require('express');
var wines      = require('./routes/wines');
var testmodel  = require('./models/testmodel');

var app = express();

app.get('/wines',     wines.findAll);
app.get('/wines/:id', wines.findById);

app.listen(3000, '0.0.0.0');
console.log('Listening on port 3000 ...');
