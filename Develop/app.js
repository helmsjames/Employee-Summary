var inquirer = require('inquirer');
inquirer
  .prompt([
    {name: 'test', message: 'Does this work'}
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });