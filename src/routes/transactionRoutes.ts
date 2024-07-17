import express from 'express';
import { fetchTransactionParams } from '../controllers/transactionController';
const router = express.Router();


router.route("/transaction").post(fetchTransactionParams)

export default router;