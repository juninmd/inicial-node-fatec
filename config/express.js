var express = require('express');
var home = require('../app/routes/home');

module.exports = () => {
    var app = express();

    app.set('port', 3000);
    app.set('ip', '127.0.0.1');

    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    home(app);

    return app;
}