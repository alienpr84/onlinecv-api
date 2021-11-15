import { connect } from 'mongoose';
import DbConnection from 'src/interfaces/DbConnection.interface';
import config from 'src/config';

export default function dbConnection(): DbConnection {
	return {
		open: async (): Promise<void> => {
			await connect(config.uriDbConnection);
			console.log('Database connected');
		},
		close: async (): Promise<void> => {
			// TODO: close db connection.
		},
	};
}
