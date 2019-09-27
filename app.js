const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World from Containers Developer Summit');
})

let port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("To view your app, open this link in your browser: http://localhost:" + port);
});
