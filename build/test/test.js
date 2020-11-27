"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = __importDefault(require("chai"));
var chai_http_1 = __importDefault(require("chai-http"));
var app_1 = __importDefault(require("../app"));
var testData_1 = __importDefault(require("./testData"));
var expect = chai_1.default.expect;
chai_1.default.use(chai_http_1.default);
describe('Test 1 - validator function', function () {
    describe('POST /validate - core functionalities', function () {
        it("should return list of missing inputs when there's any", function () { return __awaiter(void 0, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, chai_1.default.request(app_1.default)
                            .post('/api/v1/validate')
                            .send(testData_1.default.validatorMissingInputData)];
                    case 1:
                        res = _a.sent();
                        expect(res.status).to.equal(200);
                        expect(res.body.response[0]).to.equal(testData_1.default.validatorMissingInputResp);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should return 'valid' when there's no missing input", function () { return __awaiter(void 0, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, chai_1.default.request(app_1.default)
                            .post('/api/v1/validate')
                            .send(testData_1.default.validatorValidInputData)];
                    case 1:
                        res = _a.sent();
                        expect(res.status).to.equal(200);
                        expect(res.body.response).to.equal(testData_1.default.validatorValidInputResp);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('POST /validate - input validations', function () {
        it("should return error when 'data' property is missing", function () { return __awaiter(void 0, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, chai_1.default.request(app_1.default)
                            .post('/api/v1/validate')
                            .send(testData_1.default.validatorMissingPayloadData)];
                    case 1:
                        res = _a.sent();
                        expect(res.status).to.equal(400);
                        expect(res.body.response).to.equal(testData_1.default.validatorMissingPayloadResp);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should return error when wrong data format is passed", function () { return __awaiter(void 0, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, chai_1.default.request(app_1.default)
                            .post('/api/v1/validate')
                            .send(testData_1.default.validatorWrongFormatData)];
                    case 1:
                        res = _a.sent();
                        expect(res.status).to.equal(400);
                        expect(res.body.response).to.equal(testData_1.default.validatorWrongFormatResp);
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
describe('Test 2 - object item remover function', function () {
    describe('PUT /item - core functionalities', function () {
        it("should return the rest of the data when item is removed", function () { return __awaiter(void 0, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, chai_1.default.request(app_1.default)
                            .put('/api/v1/item')
                            .send(testData_1.default.itemRemoveData)];
                    case 1:
                        res = _a.sent();
                        expect(res.status).to.equal(200);
                        expect(res.body.response).not.to.have.property(testData_1.default.itemRemoveNotResp);
                        expect(res.body.response).to.have.property(testData_1.default.itemRemoveResp[0]);
                        expect(res.body.response).to.have.property(testData_1.default.itemRemoveResp[1]);
                        expect(res.body.response).to.have.property(testData_1.default.itemRemoveResp[2]);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should return 'not found' when item is not a 'data' property", function () { return __awaiter(void 0, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, chai_1.default.request(app_1.default)
                            .put('/api/v1/item')
                            .send(testData_1.default.itemNotFoundData)];
                    case 1:
                        res = _a.sent();
                        expect(res.status).to.equal(200);
                        expect(res.body.response).to.equal(testData_1.default.itemNotFoundResp);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('PUT /item - input validations', function () {
        it("should return bad request error when req body is wrong datatype", function () { return __awaiter(void 0, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, chai_1.default.request(app_1.default)
                            .put('/api/v1/item')
                            .send(testData_1.default.itemWrongTypeData)];
                    case 1:
                        res = _a.sent();
                        expect(res.status).to.equal(400);
                        expect(res.body.response).to.equal(testData_1.default.itemWrongTypeResp);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should return bad request error when req body is missing a required property", function () { return __awaiter(void 0, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, chai_1.default.request(app_1.default)
                            .put('/api/v1/item')
                            .send(testData_1.default.itemMissingPropData)];
                    case 1:
                        res = _a.sent();
                        expect(res.status).to.equal(400);
                        expect(res.body.response).to.equal(testData_1.default.itemMissingPropResp);
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
describe('Test 3 - Aladdin travels', function () {
    describe('POST /aladdin - core functionalities', function () {
        it("should return lowest start index aladdin can complete his travel from", function () { return __awaiter(void 0, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, chai_1.default.request(app_1.default)
                            .post('/api/v1/aladdin')
                            .send(testData_1.default.aladdinLowestIndexData)];
                    case 1:
                        res = _a.sent();
                        expect(res.status).to.equal(200);
                        expect(res.body.response).to.equal(testData_1.default.aladdinLowestIndexResp);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should return lowest start index aladdin can complete his travel from (even when payload is changed)", function () { return __awaiter(void 0, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, chai_1.default.request(app_1.default)
                            .post('/api/v1/aladdin')
                            .send(testData_1.default.aladdinLowestIndexData_2)];
                    case 1:
                        res = _a.sent();
                        expect(res.status).to.equal(200);
                        expect(res.body.response).to.equal(testData_1.default.aladdinLowestIndexResp_2);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should return -1 if Aladdin's mission is impossible", function () { return __awaiter(void 0, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, chai_1.default.request(app_1.default)
                            .post('/api/v1/aladdin')
                            .send(testData_1.default.aladdinMissionImpossibleData)];
                    case 1:
                        res = _a.sent();
                        expect(res.status).to.equal(200);
                        expect(res.body.response).to.equal(testData_1.default.aladdinMissionImpossibleResp);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('POST /aladdin - input validations', function () {
        it("should return bad request error when req body is wrong datatype", function () { return __awaiter(void 0, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, chai_1.default.request(app_1.default)
                            .post('/api/v1/aladdin')
                            .send(testData_1.default.aladdinWrongTypeData)];
                    case 1:
                        res = _a.sent();
                        expect(res.status).to.equal(400);
                        expect(res.body.response).to.equal(testData_1.default.aladdinWrongTypeResp);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should return bad request error when req body is missing a required property", function () { return __awaiter(void 0, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, chai_1.default.request(app_1.default)
                            .post('/api/v1/aladdin')
                            .send(testData_1.default.aladdinMissingPropData)];
                    case 1:
                        res = _a.sent();
                        expect(res.status).to.equal(400);
                        expect(res.body.response).to.equal(testData_1.default.aladdinMissingPropResp);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should return bad request error when magic or dist is not length n", function () { return __awaiter(void 0, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, chai_1.default.request(app_1.default)
                            .post('/api/v1/aladdin')
                            .send(testData_1.default.aladdinIncoherentPropsData)];
                    case 1:
                        res = _a.sent();
                        expect(res.status).to.equal(400);
                        expect(res.body.response).to.equal(testData_1.default.aladdinIncoherentPropsResp);
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
