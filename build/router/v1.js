"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var validator_1 = __importDefault(require("../services/utility/validator/validator"));
var router = express_1.Router();
router.use(express_1.json());
router.get('/validate', function (req, res) {
    var temp = validator_1.default({ bb: 's' }, [bb]);
    res.send('^_^');
});
exports.default = router;
