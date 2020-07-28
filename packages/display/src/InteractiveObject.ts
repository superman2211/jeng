import DisplayObject from './DisplayObject';

export default abstract class InteractiveObject extends DisplayObject {
	doubleClickEnabled = false;
	mouseEnabled = true;

	constructor() {
		super();
	}
}
