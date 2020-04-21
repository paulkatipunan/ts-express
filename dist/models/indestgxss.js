"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = 'ts_express';
const username = 'root';
const password = 'aaaaaa';
const sequelize = new sequelize_1.Sequelize(db, username, password, {
    host: '127.0.0.1',
    dialect: "mysql",
    port: 3306,
});
sequelize.authenticate();
exports.default = sequelize;
//# sourceMappingURL=indestgxss.js.map