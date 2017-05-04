var app = require('../server')
var test = require('tape')
var request = require('supertest')
var fs = require('fs')
var cheerio = require('cheerio')



test('Home Page', (t) => {
  request(app)
    .get('/')
    .expect(200)
    .end((err, res) => {
      $ = cheerio.load(res.text)
      t.equal($('h1').text(), 'Star Wars', 'h1=Star Wars')
      t.end()
    })
})
