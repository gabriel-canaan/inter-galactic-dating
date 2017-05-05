var express = require('express')
var fs=require('fs')
var people = require(`./data.json`)

function createRouter(people) {
  var router = express.Router()

  function findPeople(id) {
    return people.find(function(person) {
      return id == person.id
    })
  }

  function saveFile(people, callback) {
    fs.writeFile('./data.json', JSON.stringify(people), (err) => {
      callback()
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
    person = findPeople(req.params.id)
    for(key in req.body) {
      person[key] = req.body[key]
    }
    saveFile(people, () => {
        res.redirect(`/people/${person.id}`)
      })
  })

  return router
}

module.exports = createRouter
