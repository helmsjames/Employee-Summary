const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = "Intern";

    }
    generateHTML = function() {
        return `
        <div class="card" style="width: 18rem;">
          <div class="card-header">
             <h2>${this.name}</h2>
              <div class="d-flex align-items-center">
              <i class="fas fa-user-graduate mr-2"></i>
             <h3>Title: ${this.role}</h3>
              </div>
          </div>  
          <div class="card-body"> 
            <div class="card">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${this.id}</li>
                <li class="list-group-item">Email: ${this.email}</li>
                <li class="list-group-item">School: ${this.school}</li>
              </ul>
            </div>
          </div>      
        </div>`
    }
}
module.exports = Intern;