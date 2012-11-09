# folsom

Very simple in-memory key/value store for caching data

[![build status](https://secure.travis-ci.org/timhudson/folsom.png)](http://travis-ci.org/timhudson/folsom)

# example

``` js
var folsom = require('folsom');

// Add some data
folsom('A Boy Named Sue', {
	title: 'A Boy Named Sue',
	released: 'July 26, 1969',
	recorded: 'February 24, 1969'
});

// Get some data
var song = folsom('A Boy Named Sue');
```

# install

With [npm](https://npmjs.org) do:

```
npm install folsom
```

# license

MIT