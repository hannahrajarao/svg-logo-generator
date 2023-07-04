const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle, Circle, Square} = require('./lib/shapes.js');
const Text = require('./lib/text.js');
const Logo = require('./lib/logo.js');

// get user input 
inquirer.prompt([
    {
        type: 'input',
        message: 'Enter text for logo:',
        name: 'text'
    },
    {
        type: 'input',
        message: 'Enter text color (css named color or hexadecimal):',
        name: 'text_color'
    },
    {
        type: 'list',
        message: 'Choose a shape for your logo:',
        name: 'shape',
        choices: ['triangle', 'circle', 'square']
    },
    {
        type: 'input',
        message: 'Enter shape color (css named color or hexadecimal):',
        name: 'shape_color'
    }
])
.then(answers => {

    // Choose shape based on user entry
    let shape;
    switch(answers.shape) {
        case 'triangle': 
            shape = new Triangle();
            break;
        case 'circle': 
            shape = new Circle();
            break;
        case 'square': 
            shape = new Square();
            break;
    }
    shape.setColor(answers.shape_color);

    // Create Text object to manage text element
    const text = new Text(answers.text);
    text.setColor(answers.text_color);
    
    // Create logo element to combine shape and text into single svg
    const logo = new Logo(text, shape);

    // Write to file
    fs.writeFile('logo.svg', logo.render(), (err) => {
        err ? console.error(err) : console.log('Generated logo.svg');
    });
});
