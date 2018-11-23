'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _controller = require('./controller');

var _controller2 = _interopRequireDefault(_controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = 3000;
var app = (0, _express2.default)();

app.get('/', function (req, res) {
    var filePath = _path2.default.resolve(__dirname, '../dist/index.html');
    res.sendFile(filePath);
});
app.use('/', _express2.default.static('dist'));
app.use('/api', _controller2.default);
app.listen(port, function () {
    return console.log('Example app listening on port ' + port + '!');
});

module.exports = app;