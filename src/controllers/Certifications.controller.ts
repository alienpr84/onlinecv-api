import { Request, Response } from 'express';
import BaseController from 'src/interfaces/BaseController.interface';
import CertificationModel from 'src/models/Certification.model';

const controller: BaseController = {} as BaseController;

controller.create = async (req: Request, res: Response) => {
	try {
		const model = new CertificationModel(req.body);
		await model.save();
		res.status(201).json({
			message: 'Created successfully',
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
		const models = await CertificationModel.find();
		res.status(200).json({
			message: 'Collection',
			payload: models,
		});
	} catch (error: unknown) {
		res.status(403).json({
			message: error instanceof Error ? error.message : String(error),
			payload: [],
		});
	}
};

controller.getById = async (req: Request, res: Response) => {
	try {
		const model = await CertificationModel.findById(req.params.id);
		res.status(200).json({
			message: 'Document',
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
		const model = await CertificationModel.findByIdAndUpdate(req.params.id, req.body);
		res.status(200).json({
			message: 'Updated sucessfully',
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
		await CertificationModel.findByIdAndDelete(req.params.id);
		res.status(204).json({
			message: 'Deleted successfully',
		});
	} catch (error: unknown) {
		res.status(403).json({
			message: error instanceof Error ? error.message : String(error),
		});
	}
};

export default controller;
