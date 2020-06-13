import { Graphics } from '@e2d/graphics';
import DisplayObjectContainer from './display-object-container';

export default class Sprite extends DisplayObjectContainer {
	private _graphics = new Graphics();

	get graphics(): Graphics {
		return this._graphics;
	}
}
