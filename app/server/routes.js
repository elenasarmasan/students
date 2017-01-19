var studentsController = require('./controllers/students.js');

module.exports = function (app) {
  app.get('/students', function (req, res) {
    studentsController.getStudentsView(req, res);
  });
};