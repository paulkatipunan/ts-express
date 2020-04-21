"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AuthMiddleware {
    verifyToken(request, response, next) {
        jsonwebtoken_1.default.verify(request.headers.authorization, process.env.JWT_KEY, (error, user) => {
            if (error) {
                return response.json('Unauthorized');
            }
            request.user = user;
            next();
        });
    }
}
exports.default = AuthMiddleware;
//# sourceMappingURL=AuthMiddleware.js.map