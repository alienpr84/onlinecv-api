import { Request, Response } from 'express';
import BaseController from 'src/interfaces/BaseController.interface';

const controller: BaseController = {} as BaseController;

controller.create = async (req: Request, res: Response) => {
	res.json({ message: 'create' });
};

controller.getAll = async (req: Request, res: Response) => {
	res.json({ message: 'getAll' });
};

controller.getById = async (req: Request, res: Response) => {
	res.json({ message: 'getById' });
};

controller.update = async (req: Request, res: Response) => {
	res.json({ message: 'update' });
};

controller.delete = async (req: Request, res: Response) => {
	res.json({ message: 'delete' });
};
