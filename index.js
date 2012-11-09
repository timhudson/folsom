// folsom.js
// version : 0.0.1
// author : Tim Hudson
// license : MIT

(function() {

	var cache = {};

	function folsom(key, value) {
		if (value === undefined) return cache[key];
		if (toString.call(key) != '[object String]') return new Error('folsom first parameter must be a string');

		cache[key] = value;
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = folsom;
	} else {
		this.folsom = folsom;
	}

}).call(this);