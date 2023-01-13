import chalk from "chalk";
import validator from "validator";


// console.log(chalk.red.underline.inverse('Failure'))
// console.log(chalk.green.underline.inverse('Success'))

const res = validator.isEmail('caspersky700@gmail.com')
console.log(res ? chalk.green.underline.inverse(res) : chalk.red.underline.inverse(res) )