import { Point } from '@e2d/geom';

class Main {
	static main() {
		console.log(123);

		const point = new Point(1, 2);
		console.log(point.length);
		console.log(Point.polar(1, 2));
	}
}

Main.main();
