import { CanvasEngine } from '@jeng/canvas-engine';
import { CanvasTextExtension } from '@jeng/text';
import { CustomImageExtension } from './image';
import CustomPlatform from './platform';

export default class CustomEngine extends CanvasEngine {
	platform: CustomPlatform;

	constructor() {
		super();
		this.platform = new CustomPlatform(this);

		CanvasTextExtension.init(this);
		CustomImageExtension.init(this);
	}
}
