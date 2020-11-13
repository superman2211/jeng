/* eslint-disable no-console */
export default class Resouces {
	private static _cache = new Map<string, any>();

	static get(src: string): any | null {
		if (!src) {
			return null;
		}

		const resource = this._cache.get(src);
		if (resource) {
			return resource;
		}

		this.load(src);

		return null;
	}

	private static load(src: string) {
		const extension = src.split('.').pop();
		switch (extension) {
			case 'png':
			case 'jpg':
				const image = document.createElement('img') as HTMLImageElement;
				image.src = src;
				image.onload = () => console.log(`image loaded: ${src}`);
				image.onerror = (e) => console.log(`image load error: ${e}`);
				this._cache.set(src, image);
				break;
			default:
				// eslint-disable-next-line no-console
				console.warn(`unknown resource type: ${src}`);
				break;
		}
	}
}
