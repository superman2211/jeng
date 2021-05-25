/* eslint-disable class-methods-use-this */
import { Screen } from '@jeng/core';

export class WebScreen extends Screen {
	getWindowWidth() {
		return window.innerWidth;
	}

	getWindowHeight() {
		return window.innerHeight;
	}

	getWindowPixelRatio() {
		return window.devicePixelRatio ?? 1;
	}
}
