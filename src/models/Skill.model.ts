import { Schema, model } from 'mongoose';

const schema = new Schema(
	{
		name: { type: String, required: true },
		description: String,
		yearsExperience: { type: Number, required: true, min: 1, max: 50 },
		imagePath: String,
		strength: { type: Number, required: true, min: 1, max: 10 },
		position: { type: Number, requered: true, min: 1 },
		skillCategory: {
			type: Schema.Types.ObjectId,
			ref: 'SkillCategory',
		},
	},
	{ timestamps: true },
);

export default model('Skill', schema);
