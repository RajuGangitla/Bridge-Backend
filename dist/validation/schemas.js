"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionParamsSchema = exports.quoteSchema = exports.chainSchema = exports.tokenSchema = void 0;
const zod_1 = require("zod");
exports.tokenSchema = zod_1.z.object({
    name: zod_1.z.string(),
    symbol: zod_1.z.string(),
    blockchain: zod_1.z.string(),
});
exports.chainSchema = zod_1.z.object({
    chainId: zod_1.z.number(),
    name: zod_1.z.string(),
});
exports.quoteSchema = zod_1.z.object({
    srcChainId: zod_1.z.number(),
    srcQuoteTokenAddress: zod_1.z.string(),
    srcQuoteTokenAmount: zod_1.z.string(),
    dstChainId: zod_1.z.number(),
    dstQuoteTokenAddress: zod_1.z.string(),
    slippage: zod_1.z.number(),
    receiver: zod_1.z.string().optional(),
});
exports.transactionParamsSchema = zod_1.z.object({
    srcChainId: zod_1.z.number(),
    srcQuoteTokenAddress: zod_1.z.string(),
    srcQuoteTokenAmount: zod_1.z.string(),
    dstChainId: zod_1.z.number(),
    dstQuoteTokenAddress: zod_1.z.string(),
    slippage: zod_1.z.number(),
    receiver: zod_1.z.string().optional(),
});
