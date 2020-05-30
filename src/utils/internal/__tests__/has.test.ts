import { has } from '../has';

describe('has', () => {
  it('true only if property exist', () => {
    const obj = { name: 'Yevhenii' }
    const arr = [1,2,3]

    expect(has('name', obj)).toBeTruthy()
    expect(has('1', arr)).toBeTruthy()

    expect(has('surname', obj)).toBeFalsy()
    expect(has('3', arr)).toBeFalsy()
  })
});
