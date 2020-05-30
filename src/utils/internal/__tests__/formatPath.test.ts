import { formatPath, format } from '../formatPath';

describe('format', () => {
  it('format to array', () => {
    const pathAsString = 'user.name';
    const pathAsArray = ['user', 'name'];

    expect(format(pathAsString)).toEqual(pathAsArray);
    expect(format(pathAsArray)).toEqual(pathAsArray);
  })
});

describe('formatPath', () => {
  it('should format incoming path', () => {
    const pathAsString = 'user.name';
    const pathAsArray = ['user', 'name'];

    const fn = jest.fn();

    const withFormattedPath = formatPath(fn);

    withFormattedPath(pathAsString);
    expect(fn).toHaveBeenCalledWith(pathAsArray);

    withFormattedPath(pathAsArray);
    expect(fn).toHaveBeenCalledWith(pathAsArray);
  })
});
