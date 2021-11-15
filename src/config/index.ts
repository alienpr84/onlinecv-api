import { config as dotenvConfig } from 'dotenv';

const config = dotenvConfig();

if (config.error) {
	throw new Error("The environment variables can't be loaded.");
}

export default config.parsed;
