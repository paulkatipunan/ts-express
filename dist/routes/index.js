"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserController_1 = require("../controllers/UserController");
const AuthController_1 = require("../controllers/AuthController");
const AuthMiddleware_1 = __importDefault(require("../middleware/AuthMiddleware"));
class Routes {
    constructor() {
        // Controllers
        this.UserController = new UserController_1.UserController();
        this.AuthController = new AuthController_1.AuthController();
        this.Auth = new AuthMiddleware_1.default();
    }
    // Routes
    routes(app) {
        // Auth
        app.route('/register').post(this.AuthController.register);
        app.route('/login').post(this.AuthController.login);
        app.use(this.Auth.verifyToken).route('/profile').get(this.AuthController.getProfile);
        // Users
        app.use(this.Auth.verifyToken).route('/users').get(this.UserController.getUsers);
        app.route('/user').get(this.UserController.getUser);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=index.js.map