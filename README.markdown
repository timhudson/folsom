# folsom

Searchable in-memory object cache

[![build status](https://secure.travis-ci.org/timhudson/folsom.png)](http://travis-ci.org/timhudson/folsom)

# example

``` js
var folsom = require('../index.js')
  , people = folsom('people')

// Set searchable key
people.index('name')

people.add([
  {name: 'Sue'},
  {name: 'Suzie'},
  {name: 'Susan'},
  {name: 'Suzanne'},
  {name: 'El Suzerino'},
  {name: 'The Suzster'}
])

people.search('suz', function(err, results) {
  // results === [
  //   {name: 'Suzanne'},
  //   {name: 'Suzie'},
  //   {name: 'El Suzerino'},
  //   {name: 'The Suzster'}
  // ]
})
```

# install

With [npm](https://npmjs.org) do:

```
npm install folsom
```

# license

MIT