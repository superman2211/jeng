export interface Loader {
	src?: string;
}

export namespace Loader {
	export function isLoaded(): boolean {
		return false;
	}
}
