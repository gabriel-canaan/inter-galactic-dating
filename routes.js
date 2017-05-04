var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')


// var spacePeople = require('./data.json')

router.get('/', (req, res) => {
  res.send('<h1>Star Wars</h1>')
})


module.exports = router
