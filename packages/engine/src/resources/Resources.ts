export interface Resource {
	asset: string;
	loaded: boolean;
}

export type ResourceResolver = (asset: string) => Resource | null;

export class Resouces {
	private resources = new Map<any, any>();

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

	add(asset: string, resource: Resource) {
		this.resources.set(asset, resource);
	}

	remove(asset: string) {
		this.resources.delete(asset);
	}

	clear() {
		this.resources.clear();
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
