import DisplayObject from './display-object';

export default abstract class InteractiveObject extends DisplayObject {
	doubleClickEnabled = false;
	mouseEnabled = true;

	constructor() {
		super();
	}
}
