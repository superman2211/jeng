import DisplayObjectContainer from './display-object-container';

export default class Stage extends DisplayObjectContainer {
	private _stageWidth = 0;
	private _stageWHeight = 0;

	constructor() {
		super();
	}

	get stageWidth(): number {
		return this._stageWidth;
	}

	get stageHeight(): number {
		return this._stageWHeight;
	}
}
