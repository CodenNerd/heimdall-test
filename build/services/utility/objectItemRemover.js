"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var validator_1 = __importDefault(require("./validator/validator"));
var responses_1 = __importDefault(require("./responses"));
var VALID = responses_1.default.VALID, ATTRIBUTE_NOT_FOUND = responses_1.default.ATTRIBUTE_NOT_FOUND;
var removeItemFromObject = function (data, item) {
    var valid = validator_1.default(data, [item]);
    if (valid !== VALID)
        return ATTRIBUTE_NOT_FOUND;
    delete data[item];
    return data;
};
exports.default = removeItemFromObject;
