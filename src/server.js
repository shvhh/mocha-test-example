var express = require('express'),
    app = express();


const route = require("./index.router");
app.use("/", route);

var server = app.listen(3000, function () {
    console.log('listening on port %d', server.address().port);
});

module.exports = { app, server };