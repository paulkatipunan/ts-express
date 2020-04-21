"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USERNAME,
    PASSWORD: process.env.DB_PASSWORD,
    DB: process.env.DB_DATABASE,
    dialect: process.env.DB_CONNECTION,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
exports.default = config;
//# sourceMappingURL=database.js.map