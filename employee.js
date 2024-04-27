class Employees {
    constructor (name, salary, title, manager = null){
    this.name = name;
    this.salary = salary;
    this.title = title; 
    this.manager = manager;
    }
}

try {
    module.exports = Employees;
  } catch {
    module.exports = null;
  }

  