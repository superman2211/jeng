/* eslint-disable class-methods-use-this */
import { EngineFeature } from '../core/feature';

export abstract class Platform extends EngineFeature {
	abstract begin(): void;

	abstract end(): void;
}
