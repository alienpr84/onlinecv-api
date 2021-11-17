import { Schema, model } from 'mongoose';

const schema = new Schema(
	{
		name: { type: String, required: true },
		skils: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Skill',
			},
		],
	},
	{
		timestamps: true,
	},
);

export default model('SkillCategory', schema);
