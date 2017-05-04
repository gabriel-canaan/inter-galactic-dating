var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')


// var spacePeople = require('./data.json')

router.get('/', (req, res) => {
  res.render('home')
})


module.exports = router
