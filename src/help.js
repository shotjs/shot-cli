'use strict';
const help = `
$ shot --help

  Usage:

    $ shot <command> <directory> [<options>]

  Commands:

    i, init                 Initialize a Shot project

  Options:

    -h, --help              Display help information
    -v, --version           Output version

  Examples:

    $ shot init new_app
`;

function init () {
	console.log(help);
	process.exit(1);
};

exports.init = init;
