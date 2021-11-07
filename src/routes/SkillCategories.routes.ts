import { Router } from 'express';
import SkillCategories from 'src/controllers/SkillCategories.controller';

export default function routes(router: Router) {
	const basePath = '/skillcategories';

	router
		.get(basePath, SkillCategories.getAll)
		.get(basePath + '/:id', SkillCategories.getById)
		.post(basePath, SkillCategories.create)
		.put(basePath + '/:id', SkillCategories.update)
		.delete(basePath + '/:id');
}
