import Support from '../engine/support';

export interface Source {
	src?: string;
}

export namespace Source {
	export function isLoaded(source: Source, support: Support): boolean {
		const { src } = source;
		if (!src) {
			return false;
		}
		const resource = support.resources.get(src);
		return !!resource?.loaded;
	}
}
