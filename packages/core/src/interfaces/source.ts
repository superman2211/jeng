import { Engine } from '../core/engine';
import { Resource } from '../features/resources';

export interface Source {
	src?: string;
}

export namespace Source {
	export function getResource(source: Source, engine: Engine): Resource | null {
		const { src } = source;
		if (!src) {
			return null;
		}
		return engine.resources.get(src);
	}

	export function isLoaded(source: Source, engine: Engine): boolean {
		const resource = getResource(source, engine);
		return !!resource?.loaded;
	}
}
