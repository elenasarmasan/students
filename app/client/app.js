module.config(function ($routeProvider) {
 $routeProvider
   .when('/', {
     templateUrl: '/students.html',
     controller: 'StudentsPage',
     controllerAs: 'students'
   });
});