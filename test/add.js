var test = require('tape')
  , folsom = require('../index.js')
  , songs = folsom('songs')

songs.index('title')

test('Adding objects', function(t) {
  t.plan(5)

  // Add object
  songs.add({
    title: '25 Minutes to Go'
  })

  songs.search('minutes', function(err, results) {
    t.equal(results[0].title, '25 Minutes to Go')
  })

  //  Add array of objects
  songs.add([
    {
      title: 'Give My Love To Rose',
      artist: 'Johnny Cash'
    },
    {
      title: 'The Streets of Laredo',
      artist: 'Johnny Cash'
    },
    {
      title: 'God\'s Gonna Cut You Down',
      artist: 'Johnny Cash'
    }
  ])

  songs.search('street', function(err, results) {
    t.equal(results[0].title, 'The Streets of Laredo')
  })

  // Reset and add object
  songs.reset({
    title: 'A Boy Named Sue',
    artist: 'Johnny Cash'
  })

  songs.search('minutes', function(err, results) {
    t.notOk(results.length)
  })

  songs.search('sue', function(err, results) {
    t.equal(results[0].title, 'A Boy Named Sue')
    t.equal(results.length, 1)
  })

  t.end()
})
