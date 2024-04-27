const Employees = require('./employee')
class Manager extends Employees {
    constructor (name, salary, title, manager = null){
        super (name, salary, title, manager)
        this.employee = [];
    }
addEmployees (employee){
    this.employee.push(employee)
}
}
try {
    module.exports = Manager;
  } catch {
    module.exports = null;
  }
