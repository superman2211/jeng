import { Point } from '@e2d/geom';
import Event from './event';

export default class PointerEvent extends Event {
    private _stageX: number;
	private _stageY: number;
	private _localX: number;
	private _localY: number;

	constructor(type: string, cancelable: boolean, stageX: number, stageY: number, localX: number, localY: number) {
		super(type, cancelable);

		this._stageX = stageX;
		this._stageY = stageY;

		this._localX = localX;
		this._localY = localY;
	}

	get stageX(): number {
		return this._stageX;
	}

	get stageY(): number {
		return this._stageY;
	}

	get localX(): number {
		return this._localX;
	}

	get localY(): number {
		return this._localY;
	}

	get localPoint(): Point {
		const p = new Point(1,2);
		return new Point(this.localX, this.localY);
	}

	get stagePoint(): Point {
		return new Point(this.stageX, this.stageY);
	}

	clone(): Event {
		return new PointerEvent(this.type, this.cancelable, this._stageX, this._stageY, this._localX, this._localY) as Event;
	}

	cloneWithType(type: string): Event {
		return new PointerEvent(type, this.cancelable, this._stageX, this._stageY, this._localX, this._localY);
	}

	toString(): string {
		return `PointerEvent, type: ${this.type}, stageX: ${this._stageX}, stageY: ${this._stageY}, localX: ${this._localX}, localY: ${this._localY}`;
	}
}
