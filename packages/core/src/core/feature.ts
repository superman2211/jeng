import { Engine } from './engine';

export abstract class EngineFeature {
	readonly engine: Engine;

	constructor(engine: Engine) {
		this.engine = engine;
	}
}
