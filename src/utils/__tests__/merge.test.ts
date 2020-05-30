import { merge } from '../merge';

describe('merge', () => {
  it('merge should merge the structures correctly and make them immutable', () => {
    const store = {
      surname: 'Hurynets'
    };

    const nextStore = merge(store, {
      user: {
        name: 'Yevhenii',
        skills: ['HTML', 'JS']
      }
    });

    expect(nextStore).toEqual({
      surname: 'Hurynets',
      user: {
        name: 'Yevhenii',
        skills: ['HTML', 'JS']
      }
    });

    expect(Object.isFrozen(nextStore)).toBeTruthy();
    // @ts-ignore
    expect(Object.isFrozen(nextStore.user)).toBeTruthy();
    // @ts-ignore
    expect(Object.isFrozen(nextStore.user.skills)).toBeTruthy();
  });

  it('recursively merge same properties', () => {
    const store = {
      user: {
        name: 'Yevhenii',
        skills: ['HTML', 'JS'],
        family: {
          mother: 'mom',
          father: 'dad'
        }
      }
    };

    const nextStore = merge(store, {
      user: {
        name: 'Yevhenii Hurynets',
        skills: ['CSS'],
        family: {
          brother: 'bro'
        }
      }
    });

    expect(nextStore).toEqual({
      user: {
        name: 'Yevhenii Hurynets',
        skills: ['HTML', 'JS', 'CSS'],
        family: {
          mother: 'mom',
          father: 'dad',
          brother: 'bro'
        }
      }
    });
  });
})
