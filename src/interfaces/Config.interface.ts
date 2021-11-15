export default interface Config {
	[name: string]: string | number;
	version: string;
	port: string | number;
	uriDbConnection: string;
}
