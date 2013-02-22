var test = require('tape')
  , folsom = require('../index.js')
  , people = folsom('people')

people.add([
  {name: 'Sue', nickname: 'slaz3r'},
  {name: 'Suzie', nickname: 'suzeeque'},
  {name: 'Susan', nickname: 'monstar'},
  {name: 'Suzanne', nickname: 'susiemontana'},
  {name: 'El Suzerino', nickname: 'susieamerica'},
  {name: 'The Suzster', nickname: 'zebragal22'}
])

test(function(t) {
  t.plan(2)

  people.index('name')
  people.search('suz', function(err, results) {
    t.equal(results.length, 4)
  })

  people.index('nickname')
  people.search('mon', function(err, results) {
    t.equal(results.length, 2)
    t.end()
  })
})
