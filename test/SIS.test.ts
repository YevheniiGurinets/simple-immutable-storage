import createSIS, { SIS } from '../src';
/* eslint-disable @typescript-eslint/no-explicit-any */

describe('SIS', () => {
  let sis: SIS<{}>;

  beforeEach(() => {
    sis = createSIS();
  });

  it('createSIS should create and correct instance', () => {
    expect(createSIS()).toEqual({});
  });

  it('SIS.set should set new prop correctly', () => {
    expect(sis.set('qwe', 23)).toEqual({ qwe: 23 });
  });

  it('after SIS.set object should be immutable', () => {
    const q = sis.set('qwe', 23);
    expect(Object.isFrozen(q)).toBeTruthy();
  });

  it('SIS.get should work correctly', () => {
    const q = sis.set('qwe', 23);
    expect(q.get('qwe')).toEqual(23);
  });

  it('SIS.setIn should work correctly with string path', () => {
    expect(sis.setIn('q.w.e', 23)).toEqual({ q: { w: { e: 23 } } });
    expect(sis.setIn('q.1.e', 23)).toEqual({ q: [undefined, { e: 23 }] });
  });

  it('SIS.setIn should work correctly with array path', () => {
    expect(sis.setIn(['q', 'w', 'e'], 23)).toEqual({ q: { w: { e: 23 } } });
    expect(sis.setIn(['q', 1, 'e'], 23)).toEqual({ q: [undefined, { e: 23 }] });
  });

  it('after SIS.setIn all layers should be freeze', () => {
    const obj = sis.setIn('q.w.e', 23);
    expect(Object.isFrozen(obj)).toBeTruthy();
    // @ts-ignore
    expect(Object.isFrozen(obj.q)).toBeTruthy();
    // @ts-ignore
    expect(Object.isFrozen(obj.q.w)).toBeTruthy();

    const arr = sis.setIn('0.0.0', 23);
    // @ts-ignore
    expect(Object.isFrozen(arr[0])).toBeTruthy();
    // @ts-ignore
    expect(Object.isFrozen(arr[0][0])).toBeTruthy();
  });
});
