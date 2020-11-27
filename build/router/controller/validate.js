"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var validator_1 = __importDefault(require("../../services/utility/validator/validator"));
var responses_1 = __importDefault(require("../../services/utility/responses"));
var util_1 = require("../../services/utility/util");
var PROPERTY_REQUIRED = responses_1.default.PROPERTY_REQUIRED, SHOULD_BE = responses_1.default.SHOULD_BE;
var validate = function (req, res) {
    var _a = req.body, data = _a.data, rules = _a.rules;
    if (!data)
        return res.status(400).json({ response: PROPERTY_REQUIRED + " 'data'" });
    if (!rules)
        return res.status(400).json({ response: PROPERTY_REQUIRED + " 'rules'" });
    if (!util_1.isObjectLiteral(data))
        return res.status(400).json({ response: "'data' " + SHOULD_BE + "n object" });
    if (!util_1.isArrayLiteral(rules))
        return res.status(400).json({ response: "'rules' " + SHOULD_BE + "n array" });
    var response = validator_1.default(data, rules);
    res.status(200).json({
        response: response
    });
};
exports.default = validate;
