var test = require('tape')
  , folsom = require('../index.js')
  , people = folsom('people')

people.index('name')

people.add([
  {name: 'Sue'},
  {name: 'Suzie'},
  {name: 'Susan'},
  {name: 'Suzanne'},
  {name: 'El Suzerino'},
  {name: 'The Suzster'}
])

test(function(t) {
  t.plan(4)
  people.search('Suz', function(err, results) {
    t.equal(results[0].name, 'Suzanne')
    t.equal(results[1].name, 'Suzie')
    t.equal(results[2].name, 'El Suzerino')
    t.equal(results[3].name, 'The Suzster')
    t.end()
  })
})
