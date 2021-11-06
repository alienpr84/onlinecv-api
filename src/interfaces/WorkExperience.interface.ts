import Skill from './Skill.interface';

export default interface WorkExperience {
	companyName: string;
	dateStart: Date;
	dateEnd: Date;
	position: string;
	skills: Skill[];
	description: string;
}
