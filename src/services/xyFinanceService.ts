import httpClient from '../utils/httpClient';

interface Token {
    name: string;
    symbol: string;
    blockchain: string;
}

interface Chain {
    chainId: number
    name: string
}

interface ChainResponse {
    success: string
    supportedChains: Chain[]
}

export const getTokens = async (chainId: string): Promise<Token[]> => {
    const response = await httpClient.get(`/recommendedTokens?chainId=${chainId}`);
    return response.data;
};

export const getSupportedChains = async (): Promise<ChainResponse> => {
    const response = await httpClient.get(`/supportedChains`);
    return response.data;
};


interface Quote {
    price: number;
    expires: string;
}


export const getQuote = async (data: Record<string, any>): Promise<any> => {
    const queryString = new URLSearchParams(data).toString();
    const response = await httpClient.get(`/quote?${queryString}`);
    return response.data;
};




export const getTransactionParams = async (data: Record<string, any>): Promise<any> => {
    const queryString = new URLSearchParams(data).toString();
    const response = await httpClient.get(`/buildTx?${queryString}`);
    return response.data;
};