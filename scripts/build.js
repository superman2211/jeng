/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const shelljs = require('shelljs');

const PACKAGES = 'packages';
const PACKAGE_JSON = 'package.json';
const SCOPE = '@e2d/';

function readPackage(directory, projects) {
	const projectFile = path.resolve(PACKAGES, directory, PACKAGE_JSON);
	if (!fs.existsSync(projectFile)) {
		return;
	}
	const projectData = fs.readFileSync(projectFile).toString();
	const project = JSON.parse(projectData);
	const { name } = project;
	projects[name] = project;
	console.log(`- ${name}`);
}

function getProjects() {
	console.log('GET PROJECTS');
	const projects = {};
	const packagesDirectory = path.resolve(PACKAGES);
	const packagesFiles = fs.readdirSync(packagesDirectory);
	packagesFiles.forEach((packagePath) => {
		readPackage(packagePath, projects);
	});
	return projects;
}

function resolveProject(name, projects, queue) {
	if (name.indexOf(SCOPE) !== 0) {
		return;
	}
	if (queue.includes(name)) {
		return;
	}
	const project = projects[name];
	if (project.dependencies) {
		Object.keys(project.dependencies).forEach((dependency) => {
			resolveProject(dependency, projects, queue);
		});
	}
	queue.push(name);
	console.log(`- ${name}`);
}

function resolveProjects(projects) {
	console.log('RESOLVE PROJECTS');
	const queue = [];
	Object.keys(projects).forEach((name) => {
		resolveProject(name, projects, queue);
	});
	return queue;
}

function buildProjects(queue) {
	console.log('BUILD PROJECTS');
	queue.forEach((name) => {
		console.log(`- ${name}`);
		const result = shelljs.exec(`yarn workspace ${name} build`);
		if (result.code !== 0) {
			console.error(result.stderr);
			process.exit(result.code);
		}
	});
}

function main() {
	const projects = getProjects();
	const queue = resolveProjects(projects);
	buildProjects(queue, projects);
}

main();
