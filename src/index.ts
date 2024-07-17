import express from "express"
import dotenv from "dotenv"
dotenv.config()
import tokenRoutes from "./routes/tokenRoutes"
import quoteRoutes from "./routes/quoteRoutes"
import transactionRoutes from "./routes/transactionRoutes"
import cors from "cors";


const app = express()
app.use(express.json())
app.use(cors());

// Enable CORS for all routes
app.use(cors());


//routes
app.use('/api', tokenRoutes);
app.use('/api', quoteRoutes);
app.use('/api', transactionRoutes);

//Port
const port = process.env.PORT || 7000

app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})