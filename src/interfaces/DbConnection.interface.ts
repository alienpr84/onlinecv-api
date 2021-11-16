export default interface DbConnection {
	open: () => void;
	close: () => Promise<void>;
}
