import express from "express"
import { fetchQuote } from "../controllers/quoteController"
const router = express.Router()



router.route("/quotes").post(fetchQuote)


export default router