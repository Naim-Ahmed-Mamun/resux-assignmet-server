"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
const secret_1 = __importDefault(require("./config/secret"));
process.on('uncaughtException', error => {
    console.log(error);
    process.exit(1);
});
let server;
const bootstrap = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(secret_1.default.db_url);
        console.log('Database connection successfully');
        server = app_1.default.listen(secret_1.default.port || 4000, () => {
            console.log(`Example app listening on port ${secret_1.default.port || 4000}`);
        });
    }
    catch (err) {
        console.log(err);
        console.log('database connection failed');
    }
    process.on("unhandledRejection", error => {
        console.log('uncaughtException close the server');
        if (server) {
            server.close(() => {
                console.log(error);
            });
        }
        process.exit(1);
    });
});
bootstrap();
process.on('SIGTERM', () => {
    console.log('SIGTERM is received');
    if (server) {
        server.close();
    }
});
