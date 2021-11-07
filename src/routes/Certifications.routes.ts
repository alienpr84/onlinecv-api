import { Router } from 'express';
import Certifications from 'src/controllers/Certifications.controller';

export default function routes(router: Router) {
	const basePath = '/certifications';

	router
		.get(basePath, Certifications.getAll)
		.get(basePath + '/:id', Certifications.getById)
		.post(basePath, Certifications.create)
		.put(basePath + '/:id', Certifications.update)
		.delete(basePath + '/:id', Certifications.delete);
}
