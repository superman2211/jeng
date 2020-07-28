import Event from './Event';

interface IListener {
	callback: (event: Event) => void;
	priority: number;
}

export default class EventDispatcher {
	private _listeners: Map<string, Array<IListener>> | undefined;

	// eslint-disable-next-line class-methods-use-this
	toString(): string {
		return 'EventDispatcher';
	}

	addEventListener(type: string, callback: (event: Event) => void, priority: number = 0) {
		if (!type) {
			throw '"type" can not be null';
		}

		if (!callback) {
			throw '"callback" can not be null';
		}

		if (!this._listeners) {
			this._listeners = new Map<string, Array<IListener>>();
		}

		let listeners = this._listeners.get(type);

		if (!listeners) {
			listeners = [];
			this._listeners.set(type, listeners);
		}

		const contains = listeners.some((listener) => listener.callback === callback);
		if (contains) return;

		const listener: IListener = {
			callback,
			priority,
		};

		const index = listeners.findIndex((value) => priority > value.priority);
		if (index === -1) {
			listeners.push(listener);
		} else {
			listeners.splice(index, 0, listener);
		}
	}

	removeEventListener(type: string, callback: (event: Event) => void) {
		if (!type) {
			throw '"type" can not be null';
		}

		if (!callback) {
			throw '"callback" can not be null';
		}

		if (!this._listeners) {
			return;
		}

		const listeners = this._listeners.get(type);

		if (!listeners) {
			return;
		}

		const index = listeners.findIndex((listener) => listener.callback === callback);
		if (index !== -1) {
			listeners.splice(index, 1);
		}
	}

	hasEventListener(type: string): boolean {
		if (!type) {
			throw '"type" can not be null';
		}

		if (!this._listeners) {
			return false;
		}

		const listeners = this._listeners.get(type);

		if (!listeners) {
			return false;
		}

		return listeners.length > 0;
	}

	dispatchEvent(event: Event): boolean {
		if (!event) {
			throw '"type" can not be null';
		}

		event._target = this;

		if (!this._listeners) {
			return false;
		}

		const listeners = this._listeners.get(event.type);

		if (!listeners) {
			return false;
		}

		listeners.some((listener) => {
			listener.callback(event);
			return event.isCanceledNow;
		});

		return listeners.length > 0;
	}
}
