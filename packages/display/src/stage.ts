import { IRenderSupport } from '@e2d/render';
import DisplayObjectContainer from './display-object-container';

export default class Stage extends DisplayObjectContainer {
	private _support: IRenderSupport;

	constructor(support: IRenderSupport) {
		super();
		this._support = support;
	}

	get support(): IRenderSupport {
		return this._support;
	}

	get stageWidth(): number {
		return this._support.width;
	}

	get stageHeight(): number {
		return this._support.height;
	}
}
