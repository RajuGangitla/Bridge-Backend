"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const tokenRoutes_1 = __importDefault(require("./routes/tokenRoutes"));
const quoteRoutes_1 = __importDefault(require("./routes/quoteRoutes"));
const transactionRoutes_1 = __importDefault(require("./routes/transactionRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
//routes
app.use('/api', tokenRoutes_1.default);
app.use('/api', quoteRoutes_1.default);
app.use('/api', transactionRoutes_1.default);
//Port
const port = process.env.PORT || 7000;
app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});
