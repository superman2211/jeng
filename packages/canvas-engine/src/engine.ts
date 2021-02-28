import { Engine } from '@e2d/core';
import { CanvasPlatform } from './platform';

export class CanvasEngine extends Engine {
	constructor() {
		super();
		this.platform = new CanvasPlatform(this);
	}
}
