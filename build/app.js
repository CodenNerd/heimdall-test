"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = require("body-parser");
var v1_1 = __importDefault(require("./router/v1"));
var responses_1 = require("./services/utility/responses");
var app = express_1.default();
app.use(body_parser_1.json());
app.use(body_parser_1.urlencoded({ extended: false }));
app.use('/api/v1', v1_1.default);
app.get('/', function (req, res) {
    res.send(responses_1.WELCOME);
});
app.use(function (req, res) {
    res.status(404).send(responses_1.PAGE_NOT_FOUND);
});
var port = process.env.PORT || 3000;
app.listen(port, function () { return console.log("Listening on port " + port); });
exports.default = app;
