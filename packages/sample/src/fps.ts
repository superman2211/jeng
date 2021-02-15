export default function fps() {
	return {
		type: 'text',
		text: 'fps',
		frames: 0,
		time: 0,
		textFormat: {
			size: 30,
			color: 0xffffff,
			align: 'center',
		},
		onUpdate(time: number) {
			this.time += time;
			this.frames++;
			if (this.time >= 1) {
				const frameTime = Math.ceil(1000 * this.time / this.frames);
				this.text = `${this.frames} fps ${frameTime} ms`;
				this.time = 0;
				this.frames = 0;
			}
		},
	};
}
