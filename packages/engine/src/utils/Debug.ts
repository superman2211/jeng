/* eslint-disable no-console */
export default class Debug {
	static errors = new Map<string, number>();
	static warnings = new Map<string, number>();

	static log(...args: any[]) {
		console.log(...args);
	}

	static error(...args: any[]) {
		const id = String(args);
		let count = this.errors.get(id);
		if (!count) {
			count = 0;
			console.error(...args);
		}
		count++;
		this.errors.set(id, count);
	}

	static warning(...args: any[]) {
		const id = String(args);
		let count = this.warnings.get(id);
		if (!count) {
			count = 0;
			console.warn(...args);
		}
		count++;
		this.warnings.set(id, count);
	}
}
