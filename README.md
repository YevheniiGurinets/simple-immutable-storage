TBD

## Usage

```js
import createSIS from 'simple-immutable-storage';

// set

const store = createSIS(); // {}

const nextStore = store.set('key', { value: 3 }); // { key: { value: 3 } }

store === nextStore // false

const store2 = createSIS();
const nextStore2 = store2
  .set('key', 1) // { ley: 1 }
  .set('key2', 3) // { ley: 1, key2: 2 }
  .set('key3', 3); // { ley: 1, key2: 2, key3: 3 }
```

```js
import createSIS from 'simple-immutable-storage';

// setIn
const store = createSIS(); // {}

const pathAsAString = 'some.like.string';
const nextStore = store.setIn(pathAsAString, 1); // { some: { like: { string: 1 } } }

const pathAsArray = ['some', 'like', 'string'];
const nextStore2 = store.setIn(pathAsArray, 1); // { some: { like: { string: 1 } } }

const pathWithNumbers = ['some', 1, 'string'];
const nextStore3 = store.setIn(pathWithNumbers, 1); // { some: [undefined, { string: 1 }] }

const pathWithNumbers2 = 'some.0.string';
const nextStore3 = store.setIn(pathWithNumbers2, 1); // { some: [{ string: 1 }] }
```

```js
import createSIS from 'simple-immutable-storage';

// get / getInOr
const store = createSIS(); // {}

const nextStore = store
  .setIn('user.name', 'Yevhenii')
  .setIn('user.age', 26)
  .setIn('user.skills.0', 'HTML'); // { user: { name: 'Yevhenii', age: 26, skills: ['HTML'] } }

const user = nextStore.get('user'); // { name: 'Yevhenii', age: 26, skills: ['HTML'] }

const name = nextStore.getInOr('user.name'); // Yevhenii
const name2 = nextStore.getInOr(['user', 'name']); // Yevhenii

const surname = nextStore.getInOr(['user', 'surname']); // undefined
const surname2 = nextStore.getInOr(['user', 'surname'], 'Hurynets'); // Hurynets

const firstSkill = nextStore.getInOr('user.skills.0'); // HTML
```
