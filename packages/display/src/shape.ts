import { Graphics } from '@e2d/graphics';
import DisplayObject from './display-object';

export default class Shape extends DisplayObject {
	private _graphics = new Graphics();

	get graphics(): Graphics {
		return this._graphics;
	}
}
