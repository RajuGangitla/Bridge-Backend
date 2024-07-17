import axios, { AxiosInstance } from 'axios';

const httpClient: AxiosInstance = axios.create({
    baseURL: 'https://aggregator-api.xy.finance/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default httpClient;