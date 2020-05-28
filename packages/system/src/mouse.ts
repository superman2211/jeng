export default class Mouse {
	static visible = true;

	static hide() {
		this.visible = false;
	}

	static show() {
		this.visible = true;
	}

	static updateCursor(element: HTMLElement, pointer: boolean) {
		// eslint-disable-next-line no-nested-ternary
		const cursor = this.visible ? (pointer ? 'pointer' : 'default') : 'none';
		element.style.cursor = cursor;
	}
}
