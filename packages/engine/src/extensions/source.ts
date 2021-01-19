import { Context } from '../engine/context';
import { Resource } from '../resources/resources';

export interface Source {
	src?: string;
}

export namespace Source {
	export function getResource(source: Source, context: Context): Resource | null {
		const { src } = source;
		if (!src) {
			return null;
		}
		return context.support.resources.get(src);
	}

	export function isLoaded(source: Source, context: Context): boolean {
		const resource = getResource(source, context);
		return !!resource?.loaded;
	}
}
