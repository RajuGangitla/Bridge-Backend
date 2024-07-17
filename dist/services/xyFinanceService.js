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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTransactionParams = exports.getQuote = exports.getTokens = void 0;
const httpClient_1 = __importDefault(require("../utils/httpClient"));
const getTokens = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield httpClient_1.default.get(`/supportedChains`);
    console.log(response.data);
    return response.data;
});
exports.getTokens = getTokens;
const getQuote = (token, chain) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield httpClient_1.default.post(`/quotes`, { token, chain });
    return response.data;
});
exports.getQuote = getQuote;
const getTransactionParams = (quoteId) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield httpClient_1.default.post(`/params`, { quoteId });
    return response.data;
});
exports.getTransactionParams = getTransactionParams;
