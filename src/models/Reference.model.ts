import { Schema, model } from 'mongoose';

const schema = new Schema({
	name: { type: String, required: true },
	email: String,
	phone: String,
	date: { type: Date, default: Date.now },
	imagePath: String,
	reference: String,
});

export default model('Reference', schema);
