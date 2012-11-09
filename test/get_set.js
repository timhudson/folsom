var test = require('tap').test,
		folsom = require('../index.js');

test(function(t) {
	folsom('A Boy Named Sue', {
		title: 'A Boy Named Sue',
		released: 'July 26, 1969',
		recorded: 'February 24, 1969'
	});

	var song = folsom('A Boy Named Sue');

	t.equal(song.title, 'A Boy Named Sue');
	t.equal(song.released, 'July 26, 1969');
	t.end();
});