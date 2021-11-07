import { Router } from 'express';
import Skills from 'src/controllers/Skills.controller';

export default function routes(router: Router) {
	const basePath = '/skills';

	router
		.get(basePath, Skills.getAll)
		.get(basePath + '/:id', Skills.getById)
		.post(basePath, Skills.create)
		.put(basePath + '/:id', Skills.update)
		.delete(basePath + '/:id');
}
