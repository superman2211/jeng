import { Engine, EngineModule } from '@e2d/core';
import { CanvasPlatform } from './platform';

export class CanvasEngine extends Engine {
	constructor(module?: EngineModule) {
		if (!module) {
			module = {};
		}

		module.Platform = module.Platform ?? CanvasPlatform;

		super(module);
	}
}
