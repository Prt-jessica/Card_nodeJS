#!/usr/bin/env node

const boxen = require('boxen');
const chalk = require('chalk');
const gradient = require('gradient-string');
const figlet = require('figlet');
const CFonts = require('cfonts');

console.log(gradient.instagram(figlet.textSync('CARD', {
    font: 'Standard',
    horizontalLayout: 'full',
    verticalLayout: 'default',
})));



// CFonts.say('CARD', {
//     font: 'block', // define the font face
//     align: 'center', // define text alignment
//     colors: ['system'], // define all colors
//     background: 'transparent', // define the background color, you can also use `backgroundColor` here as key
//     letterSpacing: 1, // define letter spacing
//     lineHeight: 1, // define the line height
//     space: true, // define if the output text should have empty lines on top and on the bottom
//     maxLength: '0', // define how many character can be on one line
// });

const info = {

    Name: 'Pirotte Jessica',
    Work: 'web junior DEveloper',
    npm: 'https://www.npmjs.com/~prtj',
    Github: 'https://github.com/Prt-jessica',
    Linkedin: 'https://www.linkedin.com/in/pirotte-jessica/',

}

const options = {
    padding: 1,
    borderColor: 'magenta',
    backgroundColor: 'black',
    color: 'white',
    float: 'center',
    align: 'center',
}

const newLine = '\n'

const total = chalk.blue("Name: ") + gradient.passion(`${info.Name}`) + newLine + chalk.blue("Work: ") + `${info.Work}` + newLine +
    chalk.blue("npm: ") + `${info.npm}` + newLine + chalk.blue("Github: ") + `${info.Github}` + newLine +
    chalk.blue("Linkedin: ") + `${info.Linkedin}`

console.log(boxen(total, options));