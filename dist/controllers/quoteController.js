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
exports.fetchQuote = void 0;
const xyFinanceService_1 = require("../services/xyFinanceService");
const fetchQuote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const quote = yield (0, xyFinanceService_1.getQuote)(req.body);
        res.status(200).json(quote);
    }
    catch (error) {
        res.status(500).json({ error: 'Error fetching quote', message: error.message });
    }
});
exports.fetchQuote = fetchQuote;
