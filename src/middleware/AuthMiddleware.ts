import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

class AuthMiddleware
{
	public verifyToken(request: Request, response: Response, next: any)
	{
		jwt.verify(request.headers.authorization, process.env.JWT_KEY, (error: any, user: any) => {
			if (error) {
				return response.json('Unauthorized');
			}

			request.user = user;

			next();
		});
	}
}

export default AuthMiddleware;