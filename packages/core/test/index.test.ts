import Engine2d from '../src/enigne2d/Engine2d';
import main from './main';

describe('app', () => {
	it('should rendered', () => {
		const app = main();
		app.start();

		const engine = new Engine2d();
		engine.root = app;
		engine.update(1);
	});
});
