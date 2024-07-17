import { z } from 'zod';

export const tokenSchema = z.object({
    name: z.string(),
    symbol: z.string(),
    blockchain: z.string(),
});

export const chainSchema = z.object({
    chainId: z.number(),
    name: z.string(),
});

export const quoteSchema = z.object({
    srcChainId: z.number(),
    srcQuoteTokenAddress: z.string(),
    srcQuoteTokenAmount: z.string(),
    dstChainId: z.number(),
    dstQuoteTokenAddress: z.string(),
    slippage: z.number(),
    receiver: z.string().optional(),
});

export const transactionParamsSchema = z.object({
    srcChainId: z.number(),
    srcQuoteTokenAddress: z.string(),
    srcQuoteTokenAmount: z.string(),
    dstChainId: z.number(),
    dstQuoteTokenAddress: z.string(),
    slippage: z.number(),
    receiver: z.string().optional(),
});