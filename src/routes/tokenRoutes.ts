import express from "express"
import { fetchSupportedChains, fetchTokens } from "../controllers/tokenController"
const router = express.Router()



router.route("/tokens").get(fetchTokens)
router.route("/chains").get(fetchSupportedChains)


export default router