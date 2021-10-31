import { Express } from 'express';
import server from 'src/app';

function main() {
	const port = 5000; // tobe deleted
	const app: Express = server();
	app.listen(port, () => {
		console.log(`Server listen on port: ${port}`);
	});
}

main();
