#!/usr/bin/env node

const program = require('commander');

const list = require('../lib/list');
const search = require('../lib/search');
const global = require('../lib/global');

/*******************************************/

program
  .version('0.0.1')
  .parse(process.argv);

program
    .command('list') 
    .alias('ls') 
    .description('List installed package manager') 

    .action(function () {
        list();
    });

program
    .command('search <package>') 
    .alias('s') 
    .description('Search package') 

    .action(function (package) {
        search(package);
    });

program
    .command('global <manager> <package>') 
    .alias('g') 
    .description('Global setting for package') 

    .action(function (manager, package) {
        global(manager, package);
    });

program.parse(process.argv);

const NO_COMMAND_SPECIFIED = program.args.length === 0;
if (NO_COMMAND_SPECIFIED) {
  // e.g. display usage
  program.help();
}