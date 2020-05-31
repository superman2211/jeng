import Event from './event';

export default class KeyboardEvent extends Event {
	private _keyCode: number;

	constructor(type: string, cancelable: boolean, keyCode: number) {
		super(type, cancelable);

		this._keyCode = keyCode;
	}

	get keyCode(): number {
		return this._keyCode;
	}

	clone(): Event {
		return new KeyboardEvent(this.type, this.cancelable, this._keyCode);
	}

	toString(): string {
		return `KeyboardEvent: { type: ${this.type}, cancelable: ${this.cancelable}, keyCode: ${this._keyCode} }`;
	}
}
