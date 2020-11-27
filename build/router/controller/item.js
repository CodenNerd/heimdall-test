"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var responses_1 = __importDefault(require("../../services/utility/responses"));
var util_1 = require("../../services/utility/util");
var objectItemRemover_1 = __importDefault(require("../../services/utility/objectItemRemover"));
var PROPERTY_REQUIRED = responses_1.default.PROPERTY_REQUIRED, SHOULD_BE = responses_1.default.SHOULD_BE;
var item = function (req, res) {
    var _a = req.body, data = _a.data, item = _a.item;
    if (!data)
        return res.status(400).json({ response: PROPERTY_REQUIRED + " 'data'" });
    if (!item)
        return res.status(400).json({ response: PROPERTY_REQUIRED + " 'item'" });
    if (!util_1.isObjectLiteral(data))
        return res.status(400).json({ response: "'data' " + SHOULD_BE + "n object" });
    if (!util_1.isStringLiteral(item))
        return res.status(400).json({ response: "'item' " + SHOULD_BE + " string" });
    var response = objectItemRemover_1.default(data, item);
    res.status(200).json({
        response: response
    });
};
exports.default = item;
