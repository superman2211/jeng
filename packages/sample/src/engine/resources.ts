/* eslint-disable no-console */
import { Debug } from '@e2d/engine';
import { ImageResource, resolveImage } from '@e2d/resources';

export default class CustomResourceManager {
	readonly aliases = new Map<string, string>();
	readonly resources = new Map<string, ImageResource>();

	resolve = (asset: string): ImageResource | null => {
		if (asset.indexOf('id:') === 0) {
			const id = asset.slice(3);
			let resource = this.resources.get(id) as ImageResource;
			if (!resource) {
				const url = this.aliases.get(id);
				if (url) {
					resource = resolveImage(url) as ImageResource;
					this.resources.set(id, resource);
				} else {
					Debug.warning(`Resource with id: ${asset} not found`);
				}
			}
			return resource;
		}
		return null;
	}
}
