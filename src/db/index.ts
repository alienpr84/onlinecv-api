import { connect, connection } from 'mongoose';
import DbConnection from 'src/interfaces/DbConnection.interface';
import config from 'src/config';

export default function dbConnection(): DbConnection {
	connect(config.uriDbConnection);

	return {
		open: (): void => {
			try {
				connection.once('open', () => {
					console.log('Data base connected.');
				});
			} catch (error) {
				console.error(error);
			}
		},
		close: async (): Promise<void> => {
			try {
				await connection.close();
				console.log('Database was desconnected.');
			} catch (error) {
				console.error(error);
			}
		},
	};
}
