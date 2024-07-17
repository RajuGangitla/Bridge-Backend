import httpClient from '../utils/httpClient';
import { z } from 'zod';
import { quoteSchema, transactionParamsSchema } from '../validation/schemas';
import { convertToQueryParams } from '../utils/convertToQueryParams';

interface Token {
    name: string;
    symbol: string;
    blockchain: string;
}

interface Chain {
    chainId: number;
    name: string;
}

interface ChainResponse {
    success: boolean;
    supportedChains: Chain[];
}

export const getTokens = async (chainId: string): Promise<Token[]> => {
    const response = await httpClient.get(`/recommendedTokens?chainId=${chainId}`);
    return response.data;
};

export const getSupportedChains = async (): Promise<ChainResponse> => {
    const response = await httpClient.get(`/supportedChains`);
    return response.data;
};

export const getQuote = async (data: Record<string, any>): Promise<any> => {
    const parsedData = quoteSchema.safeParse(data);

    if (!parsedData.success) {
        throw new Error(`Invalid quote data: ${parsedData.error}`);
    }

    const queryString = new URLSearchParams(convertToQueryParams(parsedData.data)).toString();

    const response = await httpClient.get(`/quote?${queryString}`);
    return response.data;
};

export const getTransactionParams = async (data: Record<string, any>): Promise<any> => {
    const parsedData = transactionParamsSchema.safeParse(data);

    if (!parsedData.success) {
        throw new Error(`Invalid transaction data: ${parsedData.error}`);
    }

    const queryString = new URLSearchParams(convertToQueryParams(parsedData.data)).toString();

    const response = await httpClient.get(`/buildTx?${queryString}`);
    return response.data;
};