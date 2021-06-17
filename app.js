// const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

//Customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        console.log('Title: ' + argv.title);
        console.log('Body: ' + argv.body);
    }
});

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('Removing the note!');
    }
});

// Create list command
yargs.command({
    command: 'list',
    describe: 'Lisitng the notes',
    handler: function() {
        console.log('Listing all notes!');
    }
});

// Create read command
yargs.command({
    command: 'read',
    describe: 'Reading a note',
    handler: function() {
        console.log('Reading a notes!');
    }
});

// console.log(yargs.argv);
yargs.parse();








// const msg = getNotes();
// console.log(msg);

// // console.log(validator.isEmail('ribhumaster@gmail.com'));
// // console.log(validator.isURL('https://mead.io'));

// const greenMsg = chalk.inverse.green.bold('Success!');
// console.log(greenMsg);

// console.log(process.argv[2]);

// // const add = require('./utils.js');
// // const sum = add(5,7);
// // console.log(sum);