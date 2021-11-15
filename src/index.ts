import { Express } from 'express';
import server from 'src/app';
import config from 'src/config';

function main() {
	const port = 5000; // tobe deleted
	const app: Express = server();

	app.listen(port, () => {
		console.log(`Server listen on port: ${port}`);
	});

	console.log(config);
}

main();
