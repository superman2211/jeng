import PointerEvent from './pointer-event';
import Event from './event';

export default class TouchEvent extends PointerEvent {
	private _id: number;

	constructor(
		type: string, cancelable: boolean,
		stageX: number, stageY: number,
		localX: number, localY: number,
		id: number,
	) {
		super(type, cancelable, stageX, stageY, localX, localY);

		this._id = id;
	}

	get id(): number {
		return this._id;
	}

	clone(): Event {
		return new TouchEvent(this.type, this.cancelable, this.stageX, this.stageY, this.localX, this.localY, this._id);
	}

	cloneWithType(type: string): Event {
		return new TouchEvent(type, this.cancelable, this.stageX, this.stageY, this.localX, this.localY, this._id);
	}

	toString(): string {
		return `TouchEvent: { type: ${this.type}, cancelable: ${this.cancelable}, stageX: ${this.stageX}, stageY: ${this.stageY}, localX: ${this.localX}, localY: ${this.localY}, id: ${this.id} }`;
	}
}
