const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.role = "Manager";
  }

  generateHTML = function() {
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-header">
          <h2>${this.name}</h2>
          <div class="d-flex align-items-center"><i class="fas fa-mug-hot"></i>
            <h3>Title ${this.role}</h3>
          </div>
        </div>  
      <div class="card-body"> 
        <div class="card">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${this.id}</li>
            <li class="list-group-item">Email: ${this.email}</li>
            <li class="list-group-item">Office Number: ${this.officeNumber}</li>
          </ul>
        </div>   
      </div>   
    </div>`
  }
}

module.exports = Manager;