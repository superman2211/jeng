export default class Keyboard {
	static getKeyCode(e: KeyboardEvent): number {
		return e.which != null ? e.which : e.keyCode;
	}
}
