// const validator = require('validator');
const chalk = require('chalk');
const getNotes = require('./notes.js');

const msg = getNotes();
console.log(msg);

// console.log(validator.isEmail('ribhumaster@gmail.com'));
// console.log(validator.isURL('https://mead.io'));

console.log(chalk.inverse.green.bold('Success!'));



// const add = require('./utils.js');
// const sum = add(5,7);
// console.log(sum);