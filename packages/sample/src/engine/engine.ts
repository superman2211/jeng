import { CanvasEngine } from '@e2d/canvas-engine';
import { CanvasTextExtension } from '@e2d/text';
import { CustomImageExtension } from './image';
import CustomPlatform from './platform';

export default class CustomEngine extends CanvasEngine {
	constructor() {
		super();
		this.platform = new CustomPlatform(this);
		CanvasTextExtension.init(this);
		CustomImageExtension.init(this);
	}
}
