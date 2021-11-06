import { Request, Response } from 'express';

export default interface BaseController {
	create: (req: Request, res: Response) => Promise<void>;
	getAll: (req: Request, res: Response) => Promise<void>;
	getById: (req: Request, res: Response) => Promise<void>;
	update: (req: Request, res: Response) => Promise<void>;
	delete: (req: Request, res: Response) => Promise<void>;
}
