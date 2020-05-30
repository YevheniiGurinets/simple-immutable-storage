import { type, TYPES } from './type'

export type TPath = string | (string | number)[]

type TFunctionWithPath = (path: TPath, ...rest: any[]) => unknown

export const format = (path: TPath): string[] => {
  if (type(path) === TYPES.ARRAY) {
    return (path as string[])
  }
  return (path as string).split('.')
}

export function formatPath<T extends TFunctionWithPath> (fn: TFunctionWithPath): T {
  const formattedFn = (function (pathToFormat: TPath, ...rest: unknown[]) {
    const path = format(pathToFormat)
    return fn(path, ...rest)
  } as unknown)

  return formattedFn as T
}
