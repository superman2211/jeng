import EventDispatcher from './event-dispatcher';

export default class Event {
	private _type: string;
	private _cancelable: boolean;
	private _isCanceled: boolean = false;
	private _isCanceledNow: boolean = false;
	private _isDefaultPrevented: boolean = false;

	/* @internal */_target: EventDispatcher | undefined;

	constructor(type: string, cancelable: boolean = false) {
		if (!type) {
			throw '"type" can not be null';
		}
		this._type = type;
		this._cancelable = cancelable;
	}

	get type(): string {
		return this._type;
	}

	get cancelable(): boolean {
		return this._cancelable;
	}

	get target(): EventDispatcher {
		if (!this._target) {
			throw '"target" can not be null';
		}
		return this._target;
	}

	get isDefaultPrevented(): boolean {
		return this._isDefaultPrevented;
	}

	get isCanceled(): boolean {
		return this._isCanceled;
	}

	get isCanceledNow(): boolean {
		return this._isCanceledNow;
	}

	toString(): string {
		return `Event: { type: ${this._type}, cancelable: ${this._cancelable} }`;
	}

	clone(): Event {
		return new Event(this._type, this._cancelable);
	}

	cloneWithType(type: string): Event {
		return new Event(type, this._cancelable);
	}

	preventDefault() {
		this._isDefaultPrevented = true;
	}

	stopImmediatePropagation() {
		if (!this._cancelable) {
			return;
		}
		this._isCanceled = true;
		this._isCanceledNow = true;
	}

	stopPropagation() {
		if (!this._cancelable) {
			return;
		}
		this._isCanceled = true;
	}
}
