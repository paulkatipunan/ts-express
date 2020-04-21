"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./index"));
class User extends sequelize_1.Model {
}
exports.User = User;
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false
    }
}, {
    tableName: "users",
    sequelize: index_1.default // this bit is important
});
User.sync({ force: true }).then(() => '');
//# sourceMappingURL=userssss.js.map