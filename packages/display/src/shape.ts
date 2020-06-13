import { Graphics } from '@e2d/graphics';
import DisplayObject from './display-object';

export default class Sprite extends DisplayObject {
	private _graphics = new Graphics();

	hitArea: Sprite | undefined;
	buttonMode = false;
	useHandCursor = false;

	get graphics(): Graphics {
		return this._graphics;
	}
}
