import { Router } from 'express';
import Publications from 'src/controllers/Publications.controller';

export default function routes(router: Router) {
	const basePath = '/publications';

	router
		.get(basePath, Publications.getAll)
		.get(basePath + '/:id', Publications.getById)
		.post(basePath, Publications.create)
		.put(basePath + '/:id', Publications.update)
		.delete(basePath + '/:id');
}
