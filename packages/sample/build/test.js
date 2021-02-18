/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */

class MapEngine {
	constructor() {
		this.map = new Map();
	}

	getName() {
		return 'Map';
	}

	setComponentUpdate(type, value) {
		return this.map.set(`components.${type}.update`, value);
	}

	getComponentUpdate(type) {
		return this.map.get(`components.${type}.update`);
	}

	setTaskUpdate(type, value) {
		return this.map.set(`task.update.${type}`, value);
	}

	getTaskUpdate(type) {
		return this.map.get(`task.update.${type}`);
	}

	setAsset(type, value) {
		return this.map.set(`assets.${type}`, value);
	}

	getAsset(type) {
		return this.map.get(`assets.${type}`);
	}

	setResolver(type, value) {
		return this.map.set(`resolvers.${type}`, value);
	}

	getResolver(type) {
		return this.map.get(`resolvers.${type}`);
	}
}

class PropertyEngine {
	constructor() {
		// nothing
	}

	getName() {
		return 'Property';
	}

	setComponentUpdate(type, value) {
		if (!this.componentsUpdate) {
			this.componentsUpdate = new Map();
		}
		this.componentsUpdate.set(type, value);
	}

	getComponentUpdate(type) {
		if (!this.componentsUpdate) {
			return null;
		}
		return this.componentsUpdate.get(type);
	}

	setTaskUpdate(type, value) {
		if (!this.taskUpdate) {
			this.taskUpdate = new Map();
		}
		this.taskUpdate.set(type, value);
	}

	getTaskUpdate(type) {
		if (!this.taskUpdate) {
			return null;
		}
		return this.taskUpdate.get(type);
	}

	setAsset(type, value) {
		if (!this.assets) {
			this.assets = new Map();
		}
		this.assets.set(type, value);
	}

	getAsset(type) {
		if (!this.assets) {
			return null;
		}
		return this.assets.get(type);
	}

	setResolver(type, value) {
		if (!this.resolvers) {
			this.resolvers = new Map();
		}
		this.resolvers.set(type, value);
	}

	getResolver(type) {
		if (!this.resolvers) {
			return null;
		}
		return this.resolvers.get(type);
	}
}

function getEngines() {
	return [
		new MapEngine(),
		new PropertyEngine(),
	];
}

function update1() {
	return 1;
}

function update2() {
	return 2;
}

function initEngine(engine, types) {
	types.forEach((type) => {
		const componentUpdate = Math.random() < 0.5 ? update1 : update2;
		engine.setComponentUpdate(type, componentUpdate);

		const taskUpdate = Math.random() < 0.5 ? update1 : update2;
		engine.setTaskUpdate(type, taskUpdate);

		const assetUpdate = Math.random() < 0.5 ? update1 : update2;
		engine.setTaskUpdate(type, assetUpdate);

		const resolverUpdate = Math.random() < 0.5 ? update1 : update2;
		engine.setTaskUpdate(type, resolverUpdate);
	});
}

function randomElement(array) {
	return array[Math.round(Math.random() * array.length - 1)];
}

function generateTypes(count) {
	const names = [
		'container',
		'image',
		'text',
		'shape',
		'spine',
		'tween',
	];
	const types = [];
	while (count--) {
		types.push(
			randomElement(names) + Math.random().toFixed(5).replace('.', ''),
		);
	}
	return types;
}

function timeout(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

function log() {
	const message = Array.prototype.join.call(arguments, ', ');
	document.getElementById('log').innerHTML += `<div>${message}</div>`;
}

function testEngine(engine, types, incorrectTypes, iterations) {
	const startTime = performance.now();
	let value = 0;
	while (iterations--) {
		const type = Math.random() > 0.5 ? randomElement(types) : randomElement(incorrectTypes);
		const handler = engine.getComponentUpdate(type);
		if (handler) {
			value += handler();
		}

		const taskType = Math.random() > 0.5 ? randomElement(types) : randomElement(incorrectTypes);
		const taskHandler = engine.getTaskUpdate(taskType);
		if (taskHandler) {
			value += taskHandler();
		}

		const assetType = Math.random() > 0.5 ? randomElement(types) : randomElement(incorrectTypes);
		const assetHandler = engine.getAsset(assetType);
		if (assetHandler) {
			value += assetHandler();
		}

		const resolverType = Math.random() > 0.5 ? randomElement(types) : randomElement(incorrectTypes);
		const resolverHandler = engine.getTaskUpdate(resolverType);
		if (resolverHandler) {
			value += resolverHandler();
		}
	}
	log('value', value);
	log(engine.getName(), performance.now() - startTime);
}

async function main() {
	const types = generateTypes(100);
	const incorrectTypes = generateTypes(20);
	const engines = getEngines();
	engines.forEach((engine) => initEngine(engine, types));
	// eslint-disable-next-line no-restricted-syntax
	for (const engine of engines) {
		// eslint-disable-next-line no-await-in-loop
		await timeout(1000);
		testEngine(engine, types, incorrectTypes, 100000);
	}
}

main();
