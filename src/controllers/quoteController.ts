import { Request, Response } from 'express';
import { getQuote } from '../services/xyFinanceService';

export const fetchQuote = async (req: Request, res: Response): Promise<void> => {
    try {
        const quote = await getQuote(req.body);
        res.status(200).json(quote);
    } catch (error: any) {
        res.status(500).json({ error: 'Error fetching quote', message: error.message });
    }
};