var http = require('http')
var PORT1 = 3000;
var PORT2 = 8000;

function serveGood(req, res) {
  res.end("You're good.")
}

function serveBad(req, res) {
  res.end("You're lame.")
}

var goodServer = http.createServer(serveGood);

goodServer.listen(PORT1, function() {
  console.log(`Listening on port ${PORT1}`);
})

var badServer = http.createServer(serveBad);

badServer.listen(PORT2, function() {
  console.log(`Listening on port ${PORT2}`);
})
