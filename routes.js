var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')


var people = require('./data.json')

function findPeople(id) {
  return people.find((person) => id == people.id)
}

router.get('/', (req, res) => {
  res.render('home')
})

router.get('/people/:id', (req, res) => {
  person = findPeople(req.params.id)
  res.render('show', person)
})

router.get('/people/edit/:id', (req, res) => {
  person = findPeople(req.params.id)
  res.render('edit', person)
})

router.post('/people/edit/:id', (req, res) => {
  // go through req.body to get code to post to JSON
  // Needs to redirect back to /people/:id
})

router.post('/people/add', (req, res) => {
  res.render('add')
})




module.exports = router
