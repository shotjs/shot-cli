'use strict';
const fs = require('fs');
const shelljs = require('shelljs');
const url = 'https://github.com/shotjs/shot.git';

function init (argv) {
	const directory = argv[1] || 'shot_app';
	if (!shelljs.which('git')) {
		console.error('[error] Sorry, this script requires git');
		process.exit(1);
	}
	if (fs.existsSync(directory)) {
		console.warn('[warning] This directory already exists.');
		process.exit(1);
	}
	shelljs
		.exec(`git clone ${url} ${directory}`)
		.exec(`rm -rf ${directory}/.* 2> /dev/null`);
	process.exit(1);
}

exports.init = init;
