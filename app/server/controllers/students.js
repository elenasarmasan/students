module.exports = (function () {
  function getStudentsView(req, res) {
    var path = require('path');
    return res.sendFile(path.resolve(__dirname + '/../views/students.html'));
  }

  return {
    getStudentsView : getStudentsView
  };
}());
