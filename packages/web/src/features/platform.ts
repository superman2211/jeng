import { Platform } from '@jeng/core';

export abstract class WebPlatform extends Platform {
	readonly abstract view: HTMLElement;
}
