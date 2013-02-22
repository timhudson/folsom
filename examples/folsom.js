var folsom = require('../index.js')
  , songs = folsom('songs')

// Add a single object
songs.add({
  title: '25 Minutes to Go',
  artist: 'Johnny Cash'
})

// Add an array of objects
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

// Choose key to search against
songs.index('title')

songs.search('minutes', function(err, results) {
  console.log(results[0].title === '25 Minutes to Go')
})

// Reset the cache and start with new object or array of objects
songs.reset({
  title: 'A Boy Named Sue',
  artist: 'Johnny Cash'
})

// See! '25 Minutes to Go' is no longer in the cache
songs.search('minutes', function(err, results) {
  console.log(results.length === 0)
})

// But 'A Boy Named Sue' is
songs.search('sue', function(err, results) {
  console.log(results[0].title === 'A Boy Named Sue')
})
