const Employee = require("./Employee")

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    this.role = "Engineer";
  }

  generateHTML = function () {
    return `
        <div class="card" style="width: 18rem;">
          <div class="card-header">
           <h2>${this.name}</h2>
            <div class="d-flex align-items-center">
              <i class="fas fa-glasses mr-2"></i>
              <h3> ${this.role}</h3>
            </div>
          </div> 
          <div class="card-body"> 
              <div class="card">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${this.id}</li>
                  <li class="list-group-item">Email: ${this.email}</li>
                  <li class="list-group-item">Github: ${this.github}</li>
                </ul>
              </div>    
          </div>
        </div>`
  }
}
module.exports = Engineer;