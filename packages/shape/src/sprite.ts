import { Graphics } from '@e2d/graphics';
import { Container } from '@e2d/display';

export default class Sprite extends Container {
	readonly graphics = new Graphics();

	constructor() {
		super();
	}
}
