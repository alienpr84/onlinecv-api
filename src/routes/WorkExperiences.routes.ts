import { Router } from 'express';
import WorkExperiences from 'src/controllers/WorkExperiences.controller';

export default function routes(router: Router) {
	const basePath = '/workexperiences';

	router
		.get(basePath, WorkExperiences.getAll)
		.get(basePath + '/:id', WorkExperiences.getById)
		.post(basePath, WorkExperiences.create)
		.put(basePath + '/:id', WorkExperiences.update)
		.delete(basePath + '/:id');
}
