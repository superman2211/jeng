import { Engine } from '../core/engine';

export abstract class Feature {
	readonly engine: Engine;

	enabled = true;

	constructor(engine: Engine) {
		this.engine = engine;
	}
}
