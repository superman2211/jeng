import { Engine, KeyEvent, KeyEventType } from '@jeng/core';

function dispatchEvent(engine: Engine, event: KeyboardEvent, type: KeyEventType) {
	const keyEvent: KeyEvent = {
		type,
		key: event.key,
		code: event.code,
		ctrl: event.ctrlKey,
		alt: event.altKey,
		shift: event.shiftKey,
		repeat: event.repeat,
	};
	engine.keyboard.dispatch(keyEvent);
	event.preventDefault();
}

export namespace KeyboardExtension {
	export function init(engine: Engine) {
		document.addEventListener('keydown', (event: KeyboardEvent) => {
			dispatchEvent(engine, event, 'keyDown');
		});

		document.addEventListener('keypress', (event: KeyboardEvent) => {
			dispatchEvent(engine, event, 'keyPress');
		});

		document.addEventListener('keyup', (event: KeyboardEvent) => {
			dispatchEvent(engine, event, 'keyUp');
		});
	}
}
