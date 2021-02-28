/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
export class Debug {
	errors = new Map<string, number>();
	warnings = new Map<string, number>();

	enabled = true;

	log(...args: any[]) {
		if (!this.enabled) {
			return;
		}
		console.log(...args);
	}

	error(...args: any[]) {
		if (!this.enabled) {
			return;
		}

		const id = String(args);
		let count = this.errors.get(id);
		if (!count) {
			count = 0;
			console.error(...args);
		}
		count++;
		this.errors.set(id, count);
	}

	warning(...args: any[]) {
		if (!this.enabled) {
			return;
		}

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
