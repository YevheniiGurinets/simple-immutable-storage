import { transformToImmutable } from '../transformToImmutable';

describe('transformToImmutable', () => {
  it('transformToImmutable should return fully immutable structure', () => {
    const store: { user: { name: string; skills: string[] } } = {
      user: {
        name: 'Yevhenii',
        skills: ['HTML', 'JS']
      }
    };

    const nextStore = transformToImmutable<{ user: { name: string; skills: string[] } }>(store);

    expect(Object.isFrozen(nextStore)).toBeTruthy();
    expect(Object.isFrozen(nextStore.user)).toBeTruthy();
    expect(Object.isFrozen(nextStore.user?.skills)).toBeTruthy();

    expect(nextStore).toEqual(store);
  });
})
