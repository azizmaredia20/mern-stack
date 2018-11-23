'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (router) {
    router.get('/question', function (req, res) {
        res.send('Hello Questions');
    });
};