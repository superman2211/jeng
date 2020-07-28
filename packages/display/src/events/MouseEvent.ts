import { Event } from '@e2d/events';
import PointerEvent from './PointerEvent';

export default class MouseEvent extends PointerEvent {
	private _buttonDown: boolean;
	private _deltaX: number;
	private _deltaY: number;

	constructor(
		type: string, cancelable: boolean,
		stageX: number = 0, stageY: number = 0,
		localX: number = 0, localY: number = 0,
		deltaX: number = 0, deltaY: number = 0,
		buttonDown: boolean = false,
	) {
		super(type, cancelable, stageX, stageY, localX, localY);

		this._deltaX = deltaX;
		this._deltaY = deltaY;
		this._buttonDown = buttonDown;
	}

	get deltaX(): number {
		return this._deltaX;
	}

	get deltaY(): number {
		return this._deltaY;
	}

	get buttonDown(): boolean {
		return this._buttonDown;
	}

	clone(): Event {
		return new MouseEvent(this.type, this.cancelable, this.stageX, this.stageY, this.localX, this.localY, this._deltaX, this._deltaY, this._buttonDown);
	}

	cloneWithType(type: string): Event {
		return new MouseEvent(type, this.cancelable, this.stageX, this.stageY, this.localX, this.localY, this._deltaX, this._deltaY, this._buttonDown);
	}

	toString(): string {
		return `MouseEvent: { type: ${this.type}, cancelable: ${this.cancelable}, stageX: ${this.stageX}, stageY: ${this.stageY}, localX: ${this.localX}, localY: ${this.localY}, deltaX: ${this._deltaX}, deltaY: ${this._deltaY}, buttonDown: ${this._buttonDown} }`;
	}
}
