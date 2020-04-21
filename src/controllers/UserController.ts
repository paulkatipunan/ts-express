import { Request, Response } from 'express';
import { User } from '../models/user';

export class UserController
{
	public getUsers(request: Request, response: Response)
	{
		User.findAll<User>({})
                .then((users: User[]) => response.json(users))
                .catch((err: Error) => response.status(500).json(err));
	}

      public getUser(request: Request, response: Response)
      {
            response.json('message this route is not authenticated');
      }
}