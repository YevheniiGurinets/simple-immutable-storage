export const isInteger = Number.isInteger || function (n: unknown): boolean {
  return ((n as number) << 0) === n;
};
