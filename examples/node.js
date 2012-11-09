var folsom = require('../index.js');

// Add some data
folsom('A Boy Named Sue', {
	title: 'A Boy Named Sue',
	released: 'July 26, 1969',
	recorded: 'February 24, 1969'
});

// Get some data
var song = folsom('A Boy Named Sue');