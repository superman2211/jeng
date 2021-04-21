import { Engine } from '../core/engine';
import { EngineFeature } from '../core/feature';

export interface Resource {
	asset: string;
	loaded: boolean;
	bytesTotal: number;
	bytesLoaded: number;
}

export namespace Resource {
	export function getProgress(resource: Resource) {
		if (!resource) {
			return 0;
		}
		if (resource.loaded) {
			return 1;
		}
		if (resource.bytesTotal > 0) {
			return resource.bytesLoaded / resource.bytesTotal;
		}
		return 0;
	}
}

export type ResourceResolver = (asset: string, engine: Engine) => Resource | null;

export class Resources extends EngineFeature {
	readonly resources = new Map<any, any>();
	readonly resolvers = new Set<ResourceResolver>();

	get(asset: string): Resource | null {
		if (!asset) {
			return null;
		}

		let resource = this.resources.get(asset);
		if (!resource) {
			resource = this.resolve(asset);
			this.resources.set(asset, resource);
		}

		return resource;
	}

	private resolve(asset: string): Resource | null {
		// eslint-disable-next-line no-restricted-syntax
		for (const resolver of this.resolvers) {
			const resource = resolver(asset, this.engine);
			if (resource) {
				return resource;
			}
		}
		this.engine.debug.warning(`Resource not resolved: ${asset}`);
		return null;
	}
}
