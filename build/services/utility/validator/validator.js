"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var responses_1 = __importDefault(require("./../responses"));
var VALID = responses_1.default.VALID;
var validator = function (data, rules) {
    var missingInputItems = [];
    rules.forEach(function (rule) {
        Boolean(data[rule]) ? '' : missingInputItems.push(rule);
    });
    return missingInputItems.length ? missingInputItems : VALID;
};
exports.default = validator;
