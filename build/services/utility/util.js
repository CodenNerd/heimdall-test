"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumber = exports.isStringLiteral = exports.isArrayLiteral = exports.isObjectLiteral = void 0;
var isObjectLiteral = function (input) {
    return (!!input) && (input.constructor === Object);
};
exports.isObjectLiteral = isObjectLiteral;
var isArrayLiteral = function (input) {
    return (!!input) && (input.constructor === Array);
};
exports.isArrayLiteral = isArrayLiteral;
var isStringLiteral = function (input) {
    return (!!input) && (input.constructor === String);
};
exports.isStringLiteral = isStringLiteral;
var isNumber = function (input) {
    return (!!input) && (parseInt(input).constructor === Number && !isNaN(parseInt(input)));
};
exports.isNumber = isNumber;
