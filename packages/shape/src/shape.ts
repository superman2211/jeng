import { DisplayObject } from '@e2d/display';
import Graphics from './graphics';

export default class Shape extends DisplayObject {
	readonly graphics = new Graphics();

	constructor() {
		super();
	}
}
