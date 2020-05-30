import { F } from './utils/internal';
import { setIn } from './utils/setIn';
import { getInOr } from './utils/getInOr';
import { merge } from './utils/merge';
import { TPath } from './utils/internal';

export class Api {
  public set(key: string, value: unknown) {
    return {...this, [key]: F(value)}
  }

  public setIn(path: TPath, value: unknown) {
    return setIn(path, value, this)
  }

  public get(key: string) {
    // @ts-ignore
    return this[key];
  }

  public getInOr(path: TPath, or?: unknown) {
    return getInOr(path, this, or)
  }

  public merge(value: object | Array<unknown>) {
    return merge(this, value)
  }
}
