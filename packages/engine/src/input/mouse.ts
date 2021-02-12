import Engine from '../engine/engine';
import { PointerEventType } from '../interfaces/pointer';

function dispatchEvent(engine: Engine, event: MouseEvent, type: PointerEventType) {
	const { element } = engine.support;
	const clientRect = element.getBoundingClientRect();
	const x = event.clientX - clientRect.left - element.clientLeft;
	const y = event.clientY - clientRect.top - element.clientTop;
	engine.dispatchPointerEvent({
		type, x, y,
	});
	event.preventDefault();
}

// eslint-disable-next-line import/prefer-default-export
export function applyMouseSupportExtension(engine: Engine) {
	const { element } = engine.support;

	element.addEventListener('mousedown', (event: MouseEvent) => {
		dispatchEvent(engine, event, 'pointerDown');
	});

	element.addEventListener('mouseup', (event: MouseEvent) => {
		dispatchEvent(engine, event, 'pointerUp');
	});

	element.addEventListener('mousemove', (event: MouseEvent) => {
		dispatchEvent(engine, event, 'pointerMove');
	});
}
