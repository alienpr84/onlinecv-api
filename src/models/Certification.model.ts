import { Schema, model } from 'mongoose';

const schema = new Schema(
	{
		title: { type: String, required: true },
		imagePath: { type: String, required: true },
		description: String,
		date: { type: Date, required: true },
	},
	{ timestamps: true },
);

export default model('Certification', schema);
