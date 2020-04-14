var inquirer = require('inquirer');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Main = require("./Templates/main");
const myTeam = [];
const fs = require("fs");

function validate(text) {
  if(text === ''){
    return 'Must enter at least one character';
}
return true;
}


function validateId(data) {
  if(isNaN(+data)) {
    return 'You must enter an Integer';
  }
  return true;
}


function getManagerInfo() {
inquirer
  .prompt([
    {name: 'managerName', message: 'Enter the manager\'s name?'},
    {name: 'id', message: 'What is your ID Number?', validate: validateId},
    {name: 'email', message: 'What is your email?', validate},
    {name: 'officeNumber', message: 'What is your office number?', validate}
  ])
  .then(answers => {
    const {managerName, id, email, officeNumber} = answers;
    // Use user feedback for... whatever!! 
    console.log('MANAGER', Manager); 
    const manager = new Manager(managerName, id, email, officeNumber);
    console.log(manager);
    myTeam.push(manager);
    console.log(myTeam);
    promptForTeamMember();
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}

getManagerInfo();

function getEngineerInfo() {
  return inquirer
    .prompt([
      {name: 'engineerName', message: 'Enter the Engineer\'s name?'},
      {name: 'id', message: 'What is your ID Number?', validate: validateId},
      {name: 'email', message: 'What is your email?', validate},
      {name: 'getGithub', message: 'What is your github user name?', validate}
    ])
    .then(answers => {
      const {engineerName, id, email, getGithub} = answers;
      // Use user feedback 
      console.log('ENGINEER', Engineer); 
      const engineer = new Engineer(engineerName, id, email, getGithub);
      console.log(engineer);
      myTeam.push(engineer);
      console.log(myTeam);
      return;
    })
    .catch(error => {
      if(error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
  }


  function getInternInfo() {
    return inquirer
      .prompt([
        {name: 'internName', message: 'Enter the Intern\'s name?'},
        {name: 'id', message: 'What is your ID Number?', validate: validateId},
        {name: 'email', message: 'What is your email?', validate},
        {name: 'getSchool', message: 'What school did you graduate from?', validate}
      ])
      .then(answers => {
        const {internName, id, email, getSchool} = answers;
        // Use user feedback
        console.log('INTERN', Intern); 
        const intern = new Intern(internName, id, email, getSchool);
        intern.generateHTML()
        console.log(intern);
        myTeam.push(intern);
        console.log(myTeam);
        return;
      })
      .catch(error => {
        if(error.isTtyError) {
          // Prompt couldn't be rendered in the current environment
        } else {
          // Something else went wrong
        }
      });
    }

    function promptForTeamMember() {
      inquirer.prompt ( 
      {
      name: "nextStep",
      message: "Select who you would like to add to your team.",
      type: "list",
      choices: ["Engineer", "Intern", "Done"]
      
      }).then(userInfo => {
        if (userInfo.nextStep === "Engineer") {
           getEngineerInfo()
           .then(() => {
             //Here we recursivley call our prompt
             promptForTeamMember();
           });
           
        } else if (userInfo.nextStep === "Intern") {
          getInternInfo()
          .then(() => {
            //Here we recursivley call our prompt
            promptForTeamMember();
          });
        }
        else {
          // generates a comment of "Team created"/done
          console.log(myTeam);
          let output = myTeam.map(member => member.generateHTML());
          output = Main.generateMainHtml(output);
          fs.writeFile('Output/team.html',output, function(err) {

            if (err) {
              return console.log(err);
            }
            console.log("Team created!");
          });
          
        }
      })

    }