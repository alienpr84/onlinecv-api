import { ISkill } from "./ISkill";

export interface IWorkExperience {
	companyName: string;
	dateStart: Date;
	dateEnd: Date;
	position: string;
	skills: ISkill[];
	description: string;
}