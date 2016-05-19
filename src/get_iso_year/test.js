// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var getISOYear = require('./')

describe('getISOYear', function () {
  it('returns the ISO week-numbering year of the given date', function () {
    var result = getISOYear(new Date(2007, 11 /* Dec */, 31))
    assert(result === 2008)
  })

  it('accepts a string', function () {
    var result = getISOYear(new Date(2005, 0 /* Jan */, 1).toISOString())
    assert(result === 2004)
  })

  it('accepts a timestamp', function () {
    var result = getISOYear(new Date(2005, 0 /* Jan */, 1).getTime())
    assert(result === 2004)
  })
})

