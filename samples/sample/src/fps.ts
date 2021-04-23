export interface Statistics {
	getRenderTime(): number;
	getUpdateTime(): number;
}

export function fps(statistics: Statistics) {
	return {
		type: 'text',
		text: 'fps',
		frames: 0,
		frameTime: 0,
		updateTime: 0,
		renderTime: 0,
		format: {
			size: 20,
			color: 0xffffff,
		},
		onUpdate(time: number) {
			this.frameTime += time;
			this.updateTime += statistics.getUpdateTime();
			this.renderTime += statistics.getRenderTime();
			this.frames++;
			if (this.frameTime >= 1) {
				const frameTime = Math.ceil(1000 * this.frameTime / this.frames);
				const updateTime = (this.updateTime / this.frames).toFixed(2);
				const renderTime = (this.renderTime / this.frames).toFixed(2);
				this.text = `fps: ${this.frames}, ${frameTime} ms\nupdate: ${updateTime} ms\nrender: ${renderTime} ms`;
				this.frameTime = 0;
				this.updateTime = 0;
				this.renderTime = 0;
				this.frames = 0;
			}
		},
	};
}
