var express = require('express')
var people = require(`./data.json`)
function createRouter(people) {
  var router = express.Router()

  function findPeople(id) {
    return people.find(function(person) {
      return id == person.id
    })
  }



  router.get('/', (req, res) => {
    res.render('home', {people})
  })

  router.get('/people/:id', (req, res) => {
    person = findPeople(req.params.id)
    res.render('profile', person)
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

  return router
}

module.exports = createRouter
