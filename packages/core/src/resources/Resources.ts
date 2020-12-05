export interface Resource {
	asset: string;
}

export type ResourceResolver = (asset: string) => Resource | null;

export class Resouces {
	private _cache = new Map<any, any>();

	readonly resolvers = new Set<ResourceResolver>();

	get(asset: string): Resource | null {
		if (!asset) {
			return null;
		}

		let resource = this._cache.get(asset);
		if (!resource) {
			resource = this.resolve(asset);
			this._cache.set(asset, resource);
		}

		return resource;
	}

	add(asset: string, resource: Resource) {
		this._cache.set(asset, resource);
	}

	private resolve(asset: string): Resource | null {
		// eslint-disable-next-line no-restricted-syntax
		for (const resolver of this.resolvers) {
			const resource = resolver(asset);
			if (resource) {
				return resource;
			}
		}
		// eslint-disable-next-line no-console
		console.warn(`Resource not resolved: ${asset}`);
		return null;
	}
}
