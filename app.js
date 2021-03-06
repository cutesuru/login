'use strict';

const express    = require('express');        
const app        = express();                
const bodyParser = require('body-parser');
const logger 	   = require('morgan');
const router 	   = express.Router();
const port 	   = process.env.PORT || 9000;

app.use(bodyParser.json());
app.use(logger('dev'));

require('./routes')(router);
app.use('/', router);

app.listen(port);

console.log(`App Runs on ${port}`);