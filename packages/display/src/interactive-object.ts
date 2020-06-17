import DisplayObject from './display-object';

export default class InteractiveObject extends DisplayObject {
	doubleClickEnabled = false;
	mouseEnabled = true;

	constructor() {
		super();
	}
}
