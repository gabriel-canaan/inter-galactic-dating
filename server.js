var express = require('express')
var hbs = require('express-handlebars')
var bodyParser = require('body-parser')
var routesCreator = require('./routes')

function createServer(data) {
  var routes = routesCreator(data)
  var app = express()
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())

  app.use('/',routes)

  // Middleware
  app.engine('hbs', hbs({
    defaultLayout: 'main',
    extname: 'hbs'
  }))
  app.set('view engine', 'hbs')
  app.use(express.static('public'))
  return app
}
module.exports = createServer
