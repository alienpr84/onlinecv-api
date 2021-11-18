import { Router } from 'express';
import References from 'src/controllers/References.controller';

export default function routes(router: Router) {
	const basePath = '/references';

	router
		.get(basePath, References.getAll)
		.get(basePath + '/:id', References.getById)
		.post(basePath, References.create)
		.put(basePath + '/:id', References.update)
		.delete(basePath + '/:id', References.delete);
}
