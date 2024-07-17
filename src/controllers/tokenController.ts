import { Request, Response } from 'express';
import { getSupportedChains, getTokens } from '../services/xyFinanceService';

export const fetchTokens = async (req: Request, res: Response): Promise<void> => {
    try {
        const tokens = await getTokens(req.query.chainId as string);
        res.status(200).json(tokens);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching tokens', message: error });
    }
};

export const fetchSupportedChains = async (req: Request, res: Response): Promise<void> => {
    try {
        const tokens = await getSupportedChains();
        res.status(200).json(tokens);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching blockchains', message: error });
    }
};