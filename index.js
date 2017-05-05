var createServer = require('./server')

var data = require('./data.json')
var server = createServer(data)

var PORT = process.env.PORT || 3000

server.listen(PORT, function () {
  console.log('Server is listening on port', PORT)
})
