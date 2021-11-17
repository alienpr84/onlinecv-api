import { Schema, model } from 'mongoose';

const schema = new Schema({
	companyName: { type: String, required: true },
	dateStart: { type: Date, default: Date.now, required: true },
	dateEnd: Date,
	position: { type: String, required: true },
	otherSkills: String,
});

export default model('WorkExperience', schema);
