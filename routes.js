var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')
var data = require('./data.json')

// var spacePeople = require('./data.json')

router.get('/', (req, res) => {
  res.render('home')
})

console.log(typeof data);
module.exports = router
