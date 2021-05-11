export type KeyEventType = 'keyDown' | 'keyUp' | 'keyPress';

const handlersMap = {
	keyDown: 'onKeyDown',
	keyPress: 'onKeyPress',
	keyUp: 'onKeyUp',
};

export interface KeyEvent {
	type: KeyEventType;
	key: string;
	code: string;
	ctrl: boolean;
	alt: boolean;
	shift: boolean;
	repeat: boolean;
}

export interface Key {
	keyEnabled?: boolean;
	onKeyDown?: (event: KeyEvent) => void;
	onKeyPress?: (event: KeyEvent) => void;
	onKeyUp?: (event: KeyEvent) => void;
}

export namespace Key {
	export function isKeyEnabled(key: Key): boolean {
		return key.keyEnabled ?? true;
	}

	export function dispatchEvent(component: Key, event: KeyEvent) {
		const handlerName = handlersMap[event.type];
		if (handlerName && (component as any)[handlerName]) {
			(component as any)[handlerName](event);
		}
	}
}
