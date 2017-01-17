const express = require('express');
const app = express();
app.listen(3003, function() {

  console.log("Listening on 3003");

  app.get('/', (req, res) => {
      res.sendFile(__dirname + '/index.html')
  });
});