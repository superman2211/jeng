import { Engine } from '@jeng/core';
import { ImageResource } from '@jeng/resources';

export default class CustomResourceManager {
	readonly aliases = new Map<string, string>();
	readonly resources = new Map<string, ImageResource>();

	resolve = (asset: string, engine: Engine): ImageResource | null => {
		if (asset.indexOf('id:') === 0) {
			const id = asset.slice(3);
			let resource = this.resources.get(id) as ImageResource;
			if (!resource) {
				const url = this.aliases.get(id);
				if (url) {
					resource = ImageResource.resolve(url, engine) as ImageResource;
					this.resources.set(id, resource);
				} else {
					engine.debug.warning(`Resource with id: ${asset} not found`);
				}
			}
			return resource;
		}
		return null;
	}

	init(engine: Engine) {
		engine.resources.resolvers.add(this.resolve);
	}
}
