/* globals require */

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev', {}));
app.use(express.static('dist'));

const routing = require('./routing');
app.use(routing);

app.use(bodyParser);
app.use(morgan('dev', {}));

app.listen(4200, () => console.log('Server up on localhost:4200'));
