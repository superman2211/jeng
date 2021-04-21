import { CanvasEngine } from '@jeng/canvas-engine';
import { EngineModule } from '@jeng/core';
import { CanvasTextExtension } from '@jeng/text';
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
