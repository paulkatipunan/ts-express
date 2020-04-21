"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// app/app.ts
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = require("./routes");
// import mongoose from 'mongoose';
class Index {
    constructor() {
        this.routePrv = new routes_1.Routes();
        this.app = express_1.default();
        this.config();
        this.routePrv.routes(this.app);
        // this.mongoSetup();
    }
    config() {
        this.app.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            next();
        });
        // support application/json type post data
        this.app.use(body_parser_1.default.json());
        // support application/x-www-form-urlencoded post data
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
    }
}
exports.default = new Index().app;
//# sourceMappingURL=index.js.map