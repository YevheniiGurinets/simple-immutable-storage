import { type, TYPES } from '../type';

describe('type', () => {
  it('TYPES.OBJECT if object', () => {
    expect(type({})).toEqual(TYPES.OBJECT)
  })

  it('TYPES.ARRAY if array', () => {
    expect(type([])).toEqual(TYPES.ARRAY)
  })

  it('TYPES.DATE if date object', () => {
    expect(type(new Date())).toEqual(TYPES.DATE)
  })

  it('TYPES.NULL if null', () => {
    expect(type(null)).toEqual(TYPES.NULL)
  })

  it('TYPES.UNDEFINED if undefined', () => {
    expect(type(undefined)).toEqual(TYPES.UNDEFINED)
  })
});
