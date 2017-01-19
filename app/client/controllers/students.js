angular
  .module('students')
  .controller('StudentsController', StudentsController);
  
function StudentsController() {
  var vm = this;
  vm.students = getAvailableStudents();
  vm.addStudent = addStudent;

  function getAvailableStudents() {
    return [];
  };

  function addStudent(student) {
    vm.students.push(stundent);
  }
}