import { setIn } from '../setIn';

describe('setIn', () => {
  it('setIn should work correctly with string path', () => {
    const store = {};
    const nextStore = setIn('q.w.e', 23, store);
    expect(nextStore === store).toBeFalsy();

    expect(nextStore).toEqual({ q: { w: { e: 23 } } });

    const nextStore2 = setIn('q.1.e', 23, store)
    expect(nextStore2).toEqual({ q: [undefined, { e: 23 }] });
  });

  it('setIn should work correctly with array path', () => {
    const store = {};
    const nextStore = setIn(['q', 'w', 'e'], 23, store);
    expect(nextStore === store).toBeFalsy();

    expect(nextStore).toEqual({ q: { w: { e: 23 } } });

    const nextStore2 = setIn(['q', 1, 'e'], 23, store)
    expect(nextStore2).toEqual({ q: [undefined, { e: 23 }] });
  });

  it('after setIn all layers should be freeze', () => {
    const store = {};
    const nextStore = setIn('q.w.e', 23, store);

    expect(Object.isFrozen(nextStore)).toBeTruthy();
    // @ts-ignore
    expect(Object.isFrozen(nextStore.q)).toBeTruthy();
    // @ts-ignore
    expect(Object.isFrozen(nextStore.q.w)).toBeTruthy();

    const nextStoreArrs = setIn('0.0.0', 23, store);
    // @ts-ignore
    expect(Object.isFrozen(nextStoreArrs[0])).toBeTruthy();
    // @ts-ignore
    expect(Object.isFrozen(nextStoreArrs[0][0])).toBeTruthy();
  });
});
