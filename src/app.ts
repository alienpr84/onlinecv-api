import express, { Express, Request, Response } from 'express';

export default function server(): Express {
	const app: Express = express();

	// midlewares

	// routes
	app.use('/', (req: Request, resp: Response) => {
		resp.status(200).json('hey Im here.');
	});

	return app;
}
