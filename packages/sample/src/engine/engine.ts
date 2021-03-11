import { CanvasEngine } from '@e2d/canvas-engine';
import { EngineModule } from '@e2d/core';
import { CanvasTextExtension } from '@e2d/text';
import { CustomImageExtension } from './image';
import CustomPlatform from './platform';

export default class CustomEngine extends CanvasEngine {
	constructor(module: EngineModule = {}) {
		module.Platform = module.Platform ?? CustomPlatform;

		super(module);

		CanvasTextExtension.init(this);
		CustomImageExtension.init(this);
	}
}
