import { F } from '../freeze';

describe('freeze', () => {
  it('true only if frozen', () => {
    const obj = { name: 'Yevhenii' }
    const arr = [1,2,3]

    expect(Object.isFrozen(F(obj))).toBeTruthy();
    expect(Object.isFrozen(F(arr))).toBeTruthy();
  })
});
