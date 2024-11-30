'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var cors_1 = require('cors');
var express_1 = require('express');
var app = (0, express_1.default)();
var port = 3000;
//parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get('/', function (req, res) {
  var a = 10;
  res.send(a);
});
exports.default = app;
