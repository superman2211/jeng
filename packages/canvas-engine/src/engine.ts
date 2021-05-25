import { Engine } from '@jeng/core';
import { WebScreen } from '@jeng/web';
import { CanvasPlatform } from './platform';

export class CanvasEngine extends Engine {
	platform: CanvasPlatform;
	screen: WebScreen;
	constructor() {
		super();
		this.platform = new CanvasPlatform(this);
		this.screen = new WebScreen(this);
	}
}
