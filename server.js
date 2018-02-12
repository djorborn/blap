const express = require('express');
const app = express();
const mongoose = require('./app/modules/mongoose');
//require('dotenv').config();

app.set('view engine', 'pug');
app.set('views', './app/views');

app.use(
    [express.urlencoded({extended:false})],
    [express.static(__dirname + '/app/public')],
    [require('cookie-parser')()],
    [],
    [require('./app/routes/index')]
).listen(3000);