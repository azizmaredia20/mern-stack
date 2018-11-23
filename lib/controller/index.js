'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _questionController = require('./questionController');

var _questionController2 = _interopRequireDefault(_questionController);

var _studentController = require('./studentController');

var _studentController2 = _interopRequireDefault(_studentController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
(0, _questionController2.default)(router);
(0, _studentController2.default)(router);

exports.default = router;