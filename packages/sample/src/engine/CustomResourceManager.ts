import { ImageResource, resolveImage } from '@e2d/canvas-engine';

export default class CustomResourceManager {
	private resources = new Map<string, string>();

	addResource(id: string, url: string) {
		this.resources.set(id, url);
	}

	resolve = (asset: string): ImageResource | null => {
		if (asset.indexOf('id:') === 0) {
			const id = asset.slice(3);
			const url = this.resources.get(id);
			if (url) {
				return resolveImage(url);
			}
			// eslint-disable-next-line no-console
			console.warn(`Resource with id: ${asset} not found`);
		}
		return null;
	}
}
