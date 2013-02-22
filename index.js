var indexes = {}

module.exports = function(key) {
  if (indexes[key]) return indexes[key]
  return indexes[key] = new Folsom()
}

function Folsom() {
  this.cache = []
}

Folsom.prototype.add = function(items) {
  var self = this;

  if (!Array.isArray(items)) items = [items]

  items.forEach(function(item) {
    self.cache.push(item)
  })

  return this
}

Folsom.prototype.index = function(key) {
  this._index = key
  return this
}

Folsom.prototype.search = function(query, callback) {
  var self = this
    , items = []
    , beginswith = []
    , inmiddle = []

  if (!this._index) throw new Error('An index must be defined')
  if (!callback) throw new Error('Search requires a callback')

  // Filter items by query
  items = this.cache.filter(function(item) {
    return ~item[self._index].toLowerCase().indexOf(query.toLowerCase())
  })

  // Separate items that begin with query from those that do not
  items.forEach(function(item) {
    if (!item[self._index].toLowerCase().indexOf(query.toLowerCase())) {
      beginswith.push(item)
    } else {
      inmiddle.push(item)
    }
  })

  // Sort each array alphabetically
  beginswith = sortObjects(beginswith, this._index)
  inmiddle = sortObjects(inmiddle, this._index)

  // Combine the arrays together again
  items = beginswith.concat(inmiddle);

  callback(null, items)

  return this
}

Folsom.prototype.reset = function(items) {
  this.cache = []
  this.add(items)

  return this
}

function sortObjects(array, key) {
  return array.sort(function(a, b) {
    return a[key] < b[key] ? -1 : 1;
  })
}