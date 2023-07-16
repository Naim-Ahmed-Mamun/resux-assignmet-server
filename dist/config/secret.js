"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.join(process.cwd(), '.env') });
exports.default = {
    env: 'production',
    port: 7000,
    db_url: 'mongodb+srv://shofystore22:Amp0QXX2UGFrMQJ6@cluster0.8pmmysm.mongodb.net/redux-assignment'
    // env: process.env.NODE_ENV,
    // port: process.env.PORT,
    // db_url: process.env.DATABASE_URL
};
