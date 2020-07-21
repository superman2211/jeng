import { IRenderingContext } from '@e2d/render';
import DisplayObjectContainer from './display-object-container';

export default class Stage extends DisplayObjectContainer {
	private _context: IRenderingContext;

	constructor(context: IRenderingContext) {
		super();
		this._context = context;
	}

	get context(): IRenderingContext {
		return this._context;
	}

	get stageWidth(): number {
		return this._context.width;
	}

	get stageHeight(): number {
		return this._context.height;
	}

	render() {
		super.render(this._context);
	}
}
