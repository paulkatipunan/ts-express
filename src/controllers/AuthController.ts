import { Request, Response } from 'express';
import { User } from '../models/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export class AuthController
{
	private readonly _saltRounds = 12

	public register(request: Request, response: Response)
	{
		User.findOne({
			where: {
				email: request.body.email
			}
		})
		.then((user) => {
			if (user) {
				response.json({error: 'User already exist'});
				return;
			}

			bcrypt.hash(request.body.password, 12)// hash password
            .then((hash) => {
                User.create({
                	firstName: request.body.firstName,
                	lastName: request.body.lastName,
                	email: request.body.email,
                	password: hash
                })
			    .then((newUser) => {
			    	const token = jwt.sign(newUser.toJSON(), process.env.JWT_KEY);// Get created user and create a token

			    	response.json({token});
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

	public login(request: Request, response: Response)
	{
		User.findOne({
			where: {
				email: request.body.email
			}
		})
		.then((user: any) => {
			if (!user) {
				response.json({error: 'User not found'});
				return;
			}

			if (!bcrypt.compareSync(request.body.password, user.password)) {
				response.json({error: 'Not match'});
			}

			const token = jwt.sign(user.toJSON(), process.env.JWT_KEY);// Get created user and create a token

			response.json({token});
		})
		.catch((error) => {
			response.send('error' + error);
		});
	}

	public getProfile(request: Request, response: Response)
	{
		const decoded: any =  jwt.verify(request.headers.authorization, process.env.JWT_KEY);
		
		User.findOne({
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

			response.json({data : user});
		})
		.catch((error) => {
			response.send('error' + error);
		});
	}

	public generateToken(user: object): string
	{
		// tslint:disable-next-line:no-console
		console.log(user)
		return jwt.sign(user, process.env.JWT_KEY);
	}
}