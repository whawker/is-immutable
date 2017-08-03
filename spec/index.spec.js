var Immutable = require('immutable');
var isImmutable = require('../dist/index').default;

describe('isImmutable', function () {
  it('should return true for an Immutable List', function () {
     expect(isImmutable(Immutable.List())).toBe(true);
  });

  it('should return true for an Immutable Map', function () {
     expect(isImmutable(Immutable.Map())).toBe(true);
  });

  it('should return true for an Immutable OrderedMap', function () {
     expect(isImmutable(Immutable.OrderedMap())).toBe(true);
  });

  it('should return true for an Immutable Set', function () {
     expect(isImmutable(Immutable.Set())).toBe(true);
  });

  it('should return true for an Immutable OrderedSet', function () {
     expect(isImmutable(Immutable.OrderedSet())).toBe(true);
  });

  it('should return true for an Immutable Stack', function () {
     expect(isImmutable(Immutable.Stack())).toBe(true);
  });

  it('should return true for an Immutable Seq', function () {
     expect(isImmutable(Immutable.Seq())).toBe(true);
  });

  it('should return true for an Immutable Record', function () {
    var RecordType = Immutable.Record({ a: 1 });
    expect(isImmutable(new RecordType({ a: 2 }))).toBe(true);
  });

  it('should return false for an array', function () {
    expect(isImmutable([])).toBe(false);
  });

  it('should return false for an object', function () {
    expect(isImmutable({})).toBe(false);
  });

  it('should return false for a boolean', function () {
    expect(isImmutable(true)).toBe(false);
    expect(isImmutable(false)).toBe(false);
  });

  it('should return false for a number', function () {
    expect(isImmutable(1)).toBe(false);
    expect(isImmutable(1.23)).toBe(false);
  });

  it('should return false for an undefined', function () {
    expect(isImmutable(undefined)).toBe(false);
    expect(isImmutable(null)).toBe(false);
  });
});