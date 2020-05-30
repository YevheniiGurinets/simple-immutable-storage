import { _isInteger as isInteger } from '../isInteger';

describe('isInteger', () => {
  it('true only if integer', () => {
    expect(isInteger(23123)).toBeTruthy()

    expect(isInteger(23.34)).toBeFalsy()
    expect(isInteger(null)).toBeFalsy()
    expect(isInteger([])).toBeFalsy()
    expect(isInteger({})).toBeFalsy()
    expect(isInteger('null')).toBeFalsy()
    expect(isInteger(() => null)).toBeFalsy()
    expect(isInteger(new Date())).toBeFalsy()
  })
});
