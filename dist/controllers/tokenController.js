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
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchTokens = void 0;
const xyFinanceService_1 = require("../services/xyFinanceService");
const fetchTokens = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tokens = yield (0, xyFinanceService_1.getTokens)();
        res.status(200).json(tokens);
    }
    catch (error) {
        res.status(500).json({ error: 'Error fetching tokens', message: error });
    }
});
exports.fetchTokens = fetchTokens;
