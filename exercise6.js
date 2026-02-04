// Exercise 7

const person = {
  species: 'Human',
  breathe() {
    return 'Breathing...';
  }
};

const employee = Object.create(person);
employee.company = 'Tech Corp';
employee.position = 'Developer';

const manager = Object.create(employee);
manager.department = 'Engineering';
manager.team = [];

manager.addTeamMember = function(name) {
  this.team.push(name);
};

// Demonstrate prototype chain
console.log(manager.species);          // Inherited from person
console.log(manager.company);          // Inherited from employee
console.log(manager.department);       // Own property
manager.addTeamMember('Alice');
console.log(manager.team);             // ['Alice']