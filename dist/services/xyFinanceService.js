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
exports.getTransactionParams = exports.getQuote = exports.getSupportedChains = exports.getTokens = void 0;
const httpClient_1 = __importDefault(require("../utils/httpClient"));
const schemas_1 = require("../validation/schemas");
const convertToQueryParams_1 = require("../utils/convertToQueryParams");
const getTokens = (chainId) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield httpClient_1.default.get(`/recommendedTokens?chainId=${chainId}`);
    return response.data;
});
exports.getTokens = getTokens;
const getSupportedChains = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield httpClient_1.default.get(`/supportedChains`);
    return response.data;
});
exports.getSupportedChains = getSupportedChains;
const getQuote = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const parsedData = schemas_1.quoteSchema.safeParse(data);
    if (!parsedData.success) {
        throw new Error(`Invalid quote data: ${parsedData.error}`);
    }
    const queryString = new URLSearchParams((0, convertToQueryParams_1.convertToQueryParams)(parsedData.data)).toString();
    const response = yield httpClient_1.default.get(`/quote?${queryString}`);
    return response.data;
});
exports.getQuote = getQuote;
const getTransactionParams = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const parsedData = schemas_1.transactionParamsSchema.safeParse(data);
    if (!parsedData.success) {
        throw new Error(`Invalid transaction data: ${parsedData.error}`);
    }
    const queryString = new URLSearchParams((0, convertToQueryParams_1.convertToQueryParams)(parsedData.data)).toString();
    const response = yield httpClient_1.default.get(`/buildTx?${queryString}`);
    return response.data;
});
exports.getTransactionParams = getTransactionParams;
