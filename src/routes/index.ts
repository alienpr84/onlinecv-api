import { Router } from 'express';
import Certifications from './Certifications.routes';
import Publications from './Publications.routes';
import References from './References.routes';
import SkillCategories from './SkillCategories.routes';
import Skills from './Skills.routes';
import Users from './Users.routes';
import WorkExperiences from './WorkExperiences.routes';

const router = Router();

Certifications(router);
Publications(router);
References(router);
SkillCategories(router);
Skills(router);
Users(router);
WorkExperiences(router);

export default router;
