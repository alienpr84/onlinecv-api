import { Request, Response } from 'express';
import BaseController from 'src/interfaces/BaseController.interface';
import WorkExperiences from 'src/models/WorkExperience.model';

const controller: BaseController = {} as BaseController;

controller.create = async (req: Request, res: Response) => {
	try {
		const model = new WorkExperiences(req.body);
		await model.save();
		res.status(201).json({
			message: 'created',
			payload: model,
		});
	} catch (error: unknown) {
		res.status(403).json({
			message: error instanceof Error ? error.message : String(error),
		});
	}
};

controller.getAll = async (req: Request, res: Response) => {
	try {
		const models = await WorkExperiences.find();
		res.status(200).json({
			message: 'success',
			payload: models,
		});
	} catch (error: unknown) {
		res.status(403).json({
			message: error instanceof Error ? error.message : String(error),
		});
	}
};

controller.getById = async (req: Request, res: Response) => {
	try {
		const model = await WorkExperiences.findById(req.params.id);
		res.status(200).json({
			message: 'success',
			payload: model,
		});
	} catch (error: unknown) {
		res.status(403).json({
			message: error instanceof Error ? error.message : String(error),
		});
	}
};

controller.update = async (req: Request, res: Response) => {
	try {
		const model = await WorkExperiences.findByIdAndUpdate(req.params.id, req.body, { new: true });
		res.status(200).json({
			message: 'udpated',
			payload: model,
		});
	} catch (error: unknown) {
		res.status(403).json({
			message: error instanceof Error ? error.message : String(error),
		});
	}
};

controller.delete = async (req: Request, res: Response) => {
	try {
		await WorkExperiences.findByIdAndDelete(req.params.id);
		res.status(204).json({
			message: 'deleted',
		});
	} catch (error: unknown) {
		res.status(403).json({
			message: error instanceof Error ? error.message : String(error),
		});
	}
};

export default controller;
