import { Container } from '@e2d/display';
import Graphics from './graphics';

export default class Sprite extends Container {
	readonly graphics = new Graphics();

	constructor() {
		super();
	}
}
