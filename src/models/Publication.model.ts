import { Schema, model } from 'mongoose';

const schema = new Schema(
	{
		title: { type: String, required: true },
		description: { type: String, required: true },
		link: { type: String, required: true },
		date: { type: Date, required: true },
	},
	{ timestamps: true },
);

export default model('Publication', schema);
