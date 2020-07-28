export default class Screen {
	private static _pixelRatio: number = 0;

	static get pixelRatio(): number {
		if (!this._pixelRatio) {
			const screen = window.screen as any;

			if (screen.systemXDPI && screen.logicalXDPI && screen.systemXDPI > screen.logicalXDPI) {
				this._pixelRatio = screen.systemXDPI / screen.logicalXDPI;
			} else if (window.devicePixelRatio) {
				this._pixelRatio = window.devicePixelRatio;
			}

			if (!this._pixelRatio) {
				this._pixelRatio = 1;
			}
		}

		return this._pixelRatio;
	}

	static get width(): number {
		return Math.max(document.documentElement.clientWidth, window.innerWidth);
	}

	static get height(): number {
		return Math.max(document.documentElement.clientHeight, window.innerHeight);
	}
}
