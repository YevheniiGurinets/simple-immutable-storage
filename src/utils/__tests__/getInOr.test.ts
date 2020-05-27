import { getInOr } from '../getInOr';

const store = {
  user: {
    name: 'Yevhenii',
    skills: ['HTML', 'CSS']
  }
}

describe('getInOr', () => {
  it('getInOr should get value by path(array | string)', () => {
    const nameS = getInOr('user.name', store);
    const nameA = getInOr(['user', 'name'], store);
    expect(nameS).toEqual('Yevhenii');
    expect(nameA).toEqual('Yevhenii');

    const firstSkillS = getInOr('user.skills.0', store);
    const firstSkillA = getInOr(['user', 'skills', 0], store);
    expect(firstSkillS).toEqual('HTML');
    expect(firstSkillA).toEqual('HTML');
  });

  it('getInOr should get value by path(array | string) or undefined or default value if exist', () => {
    const surnameWithDefault = getInOr('user.surname', store, 'Hurynets');
    expect(surnameWithDefault).toEqual('Hurynets');

    const surnameWithoutDefault = getInOr('user.surname', store);
    expect(surnameWithoutDefault).toEqual(undefined);
  });
});
