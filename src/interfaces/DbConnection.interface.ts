export default interface DbConnection {
	open: () => Promise<void>;
	close: () => Promise<void>;
}
