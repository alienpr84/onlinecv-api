import { Express } from 'express';
import config from 'src/config';
import server from 'src/app';
import dbConnection from 'src/db';

function main() {
	const app: Express = server();
	const dbConnect = dbConnection();
	const { version, port } = config;

	console.info('App version: ' + version);

	dbConnect.open();

	app.listen(port, () => {
		console.log(`Server listen on port: ${port}`);
	});
}

main();
