import { Request, Response } from 'express';
import BaseController from 'src/interfaces/BaseController.interface';
import PublicationModel from 'src/models/Publication.model';

const controller: BaseController = {} as BaseController;

controller.create = async (req: Request, res: Response) => {
	try {
		const model = new PublicationModel(req.body);
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
		const models = await PublicationModel.find();
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
		const model = await PublicationModel.findById(req.params.id);
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
		const model = await PublicationModel.findByIdAndUpdate(req.params.id);
		res.status(200).json({
			message: 'updated',
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
		await PublicationModel.findByIdAndDelete(req.params.id),
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
