import { Schema, model } from 'mongoose';

const schema = new Schema({
	name: { type: String, required: true },
	country: { type: String, required: true },
	phone: { type: String, required: true },
	email: { type: String, required: true },
	linkeding: { type: String, required: true },
	github: { type: String, required: true },
	medium: { type: String, required: true },
	languages: { type: String, required: true },
	aboutme: { type: String, required: true },
	username: { type: String, required: true },
	password: { type: String, required: true },
});

export default model('User', schema);
