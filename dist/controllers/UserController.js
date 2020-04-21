"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../models/user");
class UserController {
    getUsers(request, response) {
        user_1.User.findAll({})
            .then((users) => response.json(users))
            .catch((err) => response.status(500).json(err));
    }
    getUser(request, response) {
        response.json('message this route is not authenticated');
    }
}
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map