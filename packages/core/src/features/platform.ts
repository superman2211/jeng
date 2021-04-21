/* eslint-disable class-methods-use-this */
import { EngineFeature } from '../core/feature';

export class Platform extends EngineFeature {
	readonly view: HTMLElement = document.createElement('div');

	begin(): void {
	}

	end(): void {
	}
}
