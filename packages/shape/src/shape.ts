import { Graphics } from '@e2d/graphics';
import { DisplayObject } from '@e2d/display';

export default class Shape extends DisplayObject {
	readonly graphics = new Graphics();

	constructor() {
		super();
	}
}
