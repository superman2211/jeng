import { Resource } from '@e2d/core';

export interface ImageResource extends Resource {
	image: HTMLImageElement | HTMLCanvasElement | null;
}

export function resolveImage(asset: string): ImageResource | null {
	const extension = asset.split('.').pop();
	switch (extension) {
		case 'png':
		case 'jpg':
			const resource: ImageResource = {
				asset,
				image: null,
			};

			const image = document.createElement('img') as HTMLImageElement;
			image.src = asset;
			image.onload = () => {
				Debug.log(`image loaded: ${asset}`);
				resource.image = image;
			};
			image.onerror = (e) => Debug.warning(`image load error: ${e}`);

			return resource;
		default:
			break;
	}
	return null;
}
