"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var validator_1 = __importDefault(require("../services/utility/validator/validator"));
var responses_1 = __importDefault(require("../services/utility/responses"));
var util_1 = require("../services/utility/util");
var objectItemRemover_1 = __importDefault(require("../services/utility/objectItemRemover"));
var aladdinTravels_1 = __importDefault(require("../services/utility/aladdinTravels"));
var PROPERTY_REQUIRED = responses_1.default.PROPERTY_REQUIRED, SHOULD_BE = responses_1.default.SHOULD_BE, INCOHERENT_ARRAYS = responses_1.default.INCOHERENT_ARRAYS;
var router = express_1.Router();
router.use(express_1.json());
router.post('/validate', function (req, res) {
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
});
router.put('/item', function (req, res) {
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
});
router.post('/aladdin', function (req, res) {
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
});
exports.default = router;
