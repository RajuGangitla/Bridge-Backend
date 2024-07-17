import { Request, Response } from 'express';
import { getTransactionParams } from '../services/xyFinanceService';

export const fetchTransactionParams = async (req: Request, res: Response): Promise<void> => {
    try {
        const transactionParams = await getTransactionParams(req.body);
        res.status(200).json(transactionParams);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching transaction parameters' });
    }
};