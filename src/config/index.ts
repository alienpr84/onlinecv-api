import { config as dotenvConfig } from 'dotenv';
import Config from 'src/interfaces/Config.interface';

const config = dotenvConfig();

if (config.error) {
	throw new Error("The environment variables can't be loaded.");
}

const configParsed: Config = { ...config.parsed } as Config;

if (!configParsed.version) {
	configParsed.version = 'v1.0.0';
}

if (!configParsed.port) {
	configParsed.port = 5001;
}

if (!configParsed.uriDbConnection) {
	throw new Error('The environment variable: "uriDbConnection" was not provided.');
}

export default configParsed;
