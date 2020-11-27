"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var validate_1 = __importDefault(require("./controller/validate"));
var item_1 = __importDefault(require("./controller/item"));
var aladdin_1 = __importDefault(require("./controller/aladdin"));
var router = express_1.Router();
router.use(express_1.json());
router.post('/validate', validate_1.default);
router.put('/item', item_1.default);
router.post('/aladdin', aladdin_1.default);
exports.default = router;
