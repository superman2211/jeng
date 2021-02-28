/* eslint-disable class-methods-use-this */
import { Feature } from './feature';

export class Platform extends Feature {
	readonly view: HTMLElement = document.createElement('div');

	begin(): void {
	}

	end(): void {
	}
}
