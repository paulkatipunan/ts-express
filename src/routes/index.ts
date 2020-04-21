import { Request, Response } from "express";
import { UserController } from '../controllers/UserController';
import { AuthController } from '../controllers/AuthController';
import Auth from '../middleware/AuthMiddleware';

export class Routes {
	// Controllers
	UserController: UserController = new UserController();
	AuthController: AuthController = new AuthController();
	Auth: Auth = new Auth();

	// Routes
	public routes(app: any): void
	{
		// Auth
		app.route('/register').post(this.AuthController.register);
		app.route('/login').post(this.AuthController.login);
		app.use(this.Auth.verifyToken).route('/profile').get(this.AuthController.getProfile);

		// Users
		app.use(this.Auth.verifyToken).route('/users').get(this.UserController.getUsers);
		app.route('/user').get(this.UserController.getUser);
	}
}