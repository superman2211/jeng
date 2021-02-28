/* eslint-disable class-methods-use-this */
import { Feature } from './feature';

export class Platform extends Feature {
	readonly view: HTMLElement = document.createElement('div');

	updateSize(): void {
	}

	begin(): void {
	}

	end(): void {
	}
}
