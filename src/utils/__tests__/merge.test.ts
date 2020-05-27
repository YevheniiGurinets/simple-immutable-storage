import { merge } from '../merge';

describe('merge', () => {
  it('merge should merge the structures correctly', () => {
    const store = {
      user: {
        name: 'Yevhenii',
        skills: ['HTML', 'JS']
      }
    };
    const nextStore = merge(store, { surname: 'Hurynets' }, false);
    expect(nextStore).toEqual({
      surname: 'Hurynets',
      user: {
        name: 'Yevhenii',
        skills: ['HTML', 'JS']
      }
    });
    expect(Object.isFrozen(nextStore)).toBeTruthy();
  });
})
