/* eslint-disable no-console */
import { Resource } from '@e2d/engine';

export interface ImageResource extends Resource {
	image: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | null;
}

export function resolveImage(asset: string): ImageResource | null {
	const extension = asset.split('.').pop();
	switch (extension) {
		case 'png':
		case 'jpg':
			const resource: ImageResource = {
				asset,
				loaded: false,
				image: null,
			};

			const image = document.createElement('img') as HTMLImageElement;
			image.src = asset;
			image.onload = () => {
				console.log(`image loaded: ${asset}`);
				resource.image = image;
				resource.loaded = true;
			};
			image.onerror = (e) => console.warn(`image load error: ${e}`);

			return resource;
		default:
			break;
	}
	return null;
}
