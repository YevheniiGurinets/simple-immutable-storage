import { isNil } from '../isNil';

describe('isNil', () => {
  it('true only if null', () => {
    expect(isNil(null)).toBeTruthy()

    expect(isNil(2)).toBeFalsy()
    expect(isNil([])).toBeFalsy()
    expect(isNil({})).toBeFalsy()
    expect(isNil('null')).toBeFalsy()
    expect(isNil(() => null)).toBeFalsy()
    expect(isNil(new Date())).toBeFalsy()
  })
});
