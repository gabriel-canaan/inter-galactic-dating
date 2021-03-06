var createServer = require('../server')
var test = require('tape')
var request = require('supertest')
var fs = require('fs')
var cheerio = require('cheerio')
var people = require(`${__dirname}/data/sampleData.json`)

var app = createServer(people)


test('Home Page', (t) => {
  request(app)
    .get('/')
    .expect(200)
    .end((err, res) => {
      $ = cheerio.load(res.text)
      t.equal($('h1').text(), 'Sabr', 'Header 1 is equal to Sabr')
      t.end()
    })
})

test('View Page', (t) => {
  request(app)
    .get('/person/1')
    .expect(200)
    .end((err,res) => {
      $ = cheerio.load(res.text)
      t.equal($('h2').text(), 'Han Solo', 'Header 2 on page for id 1 is Han Solo')
      // Test to check if image with class person is rendered
      t.end()
    })
})

test('Edit Page', (t) => {
  request(app)
    .get('/person/edit/2')
    .expect(200)
    .end((err, res) => {
      $ = cheerio.load(res.text)
      t.equal($('h1').text(), 'Sabr', 'Header 1 is equal to Sabr')
      // Test to check if form contains the appropriate info
      t.end()
    })
})
// Commented out till we have data
// test('Edit post page', (t) => {
//   request(app)
//     .post('/people/edit/3')
//     .send({name: 'Darth Vader'})
//     .end((err, res) => {
//       t.equal(res.status, 302, 'returns a redirect')
//       t.equal(res.headers.location, '/people/3', 'redirects to a show page for the person')
//       readPeopleFile((people) => {
//         t.equal(people[0].name, 'Darth Vader', 'updates a file')
//       })
//     })
// })

test('Help Page', (t) => {
  request(app)
    .get('/help')
    .expect(200)
    .end((err, res) => {
      $ = cheerio.load(res.text)
      t.equals($('h2').text(), 'Welcome Padawan', 'Header 2 is equal to our welcome message')
      t.end()
    })
})

function readPeopleFile(callback) {
  fs.readFile(__dirname + '/../data.json', 'utf8', (err, data) => {
    callback(JSON.parse(data))
  })
}
