import { Router } from 'express';
import Users from 'src/controllers/Users.controller';

export default function routes(router: Router) {
	const basePath = '/users';

	router
		.get(basePath, Users.getAll)
		.get(basePath + '/:id', Users.getById)
		.post(basePath, Users.create)
		.put(basePath + '/:id', Users.update)
		.delete(basePath + '/:id');
}
