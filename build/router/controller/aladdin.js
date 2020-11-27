"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var responses_1 = __importDefault(require("../../services/utility/responses"));
var util_1 = require("../../services/utility/util");
var aladdinTravels_1 = __importDefault(require("../../services/utility/aladdinTravels"));
var PROPERTY_REQUIRED = responses_1.default.PROPERTY_REQUIRED, SHOULD_BE = responses_1.default.SHOULD_BE, INCOHERENT_ARRAYS = responses_1.default.INCOHERENT_ARRAYS;
var aladdin = function (req, res) {
    var _a = req.body, n = _a.n, magic = _a.magic, dist = _a.dist;
    if (!n)
        return res.status(400).json({ response: PROPERTY_REQUIRED + " 'n'" });
    if (!magic)
        return res.status(400).json({ response: PROPERTY_REQUIRED + " 'magic'" });
    if (!dist)
        return res.status(400).json({ response: PROPERTY_REQUIRED + " 'dist'" });
    if (!util_1.isNumber(n))
        return res.status(400).json({ response: "'n' " + SHOULD_BE + "n integer" });
    if (!util_1.isArrayLiteral(magic))
        return res.status(400).json({ response: "'magic' " + SHOULD_BE + "n array" });
    if (!util_1.isArrayLiteral(dist))
        return res.status(400).json({ response: "'dist' " + SHOULD_BE + "n array" });
    var _n = parseInt(n);
    if (magic.length != _n || dist.length != _n)
        return res.status(400).json({ response: INCOHERENT_ARRAYS + " (" + _n + ")" });
    var response = aladdinTravels_1.default(_n, magic, dist);
    res.status(200).json({
        response: response
    });
};
exports.default = aladdin;
