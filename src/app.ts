import express, { Express, Request, Response } from 'express';
import router from './routes';

export default function server(): Express {
	const app: Express = express();

	// midlewares
	app.use('/api', router);

	// routes
	app.use('/', (req: Request, resp: Response) => {
		resp.status(200).json('hey Im here.');
	});

	return app;
}
