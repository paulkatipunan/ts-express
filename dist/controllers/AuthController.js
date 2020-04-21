"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../models/user");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AuthController {
    constructor() {
        this._saltRounds = 12;
    }
    register(request, response) {
        user_1.User.findOne({
            where: {
                email: request.body.email
            }
        })
            .then((user) => {
            if (user) {
                response.json({ error: 'User already exist' });
                return;
            }
            bcrypt_1.default.hash(request.body.password, 12) // hash password
                .then((hash) => {
                user_1.User.create({
                    firstName: request.body.firstName,
                    lastName: request.body.lastName,
                    email: request.body.email,
                    password: hash
                })
                    .then((newUser) => {
                    const token = jsonwebtoken_1.default.sign(newUser.toJSON(), process.env.JWT_KEY); // Get created user and create a token
                    response.json({ token });
                })
                    .catch((error) => {
                    response.send('error' + error);
                });
            })
                .catch((error) => {
                response.send('error' + error);
            });
        })
            .catch((error) => {
            response.send('error' + error);
        });
    }
    login(request, response) {
        user_1.User.findOne({
            where: {
                email: request.body.email
            }
        })
            .then((user) => {
            if (!user) {
                response.json({ error: 'User not found' });
                return;
            }
            if (!bcrypt_1.default.compareSync(request.body.password, user.password)) {
                response.json({ error: 'Not match' });
            }
            const token = jsonwebtoken_1.default.sign(user.toJSON(), process.env.JWT_KEY); // Get created user and create a token
            response.json({ token });
        })
            .catch((error) => {
            response.send('error' + error);
        });
    }
    getProfile(request, response) {
        const decoded = jsonwebtoken_1.default.verify(request.headers.authorization, process.env.JWT_KEY);
        // tslint:disable-next-line:no-console
        console.log('user', request.user);
        user_1.User.findOne({
            attributes: [
                "id",
                "firstName",
            ],
            where: {
                id: decoded.id
            }
        })
            .then((user) => {
            if (!user) {
                response.send('User does not exist');
                return;
            }
            response.json({ data: user });
        })
            .catch((error) => {
            response.send('error' + error);
        });
    }
    generateToken(user) {
        // tslint:disable-next-line:no-console
        console.log(user);
        return jsonwebtoken_1.default.sign(user, process.env.JWT_KEY);
    }
}
exports.AuthController = AuthController;
//# sourceMappingURL=AuthController.js.map