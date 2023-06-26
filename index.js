const inquirer = require('inquirer')
const Triangle = require('./shapes.js')

// get user input 
inquirer.prompt([
    {
        type: 'input',
        message: 'text',
        name: 'text'
    },
    {
        type: 'input',
        message: 'Enter logo color (css named color or hexadecimal)',
        name: 'color'
    },
    {
        type: 'list',
        message: 'Choose a shape for your logo',
        name: 'shape',
        choices: ['triangle', 'circle', 'square']
    }
])
.then(answers => {
    // console.log(answers);
    // generate svg
    const tri = new Triangle();
    tri.setColor('green')
    // save svg
    console.log(tri.render());
})
