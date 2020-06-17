export default class Internal {
	private static _enabled = false;

	static get enabled(): boolean {
		return this._enabled;
	}

	static errorMessage(property: string): string {
		return `Property ${property} cannot be changed`;
	}

	static change(callback: () => void): void {
		this._enabled = true;
		callback();
		this._enabled = false;
	}
}
