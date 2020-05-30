TBD

## Usage


### create
```js
import createSIS from 'simple-immutable-storage';

const store = createSIS({
  user: {
    name: 'Yevhenii',
    skills: ['HTML', 'JS'],
    family: {
      mother: 'mom',
      father: 'dad'
    }
  }
});

console.log(store) /*
{
  user: {
    name: 'Yevhenii',
    skills: ['HTML', 'JS'],
    family: {
      mother: 'mom',
      father: 'dad'
    }
  }
}
*/
```

### set
```js
import createSIS from 'simple-immutable-storage';

const store = createSIS(); // {}

const nextStore = store.set('key', { value: 3 }); // { key: { value: 3 } }

store === nextStore // false

const store2 = createSIS();
const nextStore2 = store2
  .set('key', 1) // { ley: 1 }
  .set('key2', 2) // { ley: 1, key2: 2 }
  .set('key3', 3); // { ley: 1, key2: 2, key3: 3 }
```

### setIn
```js
import createSIS from 'simple-immutable-storage';

const store = createSIS(); // {}

/*
String or array could be used as a path.
All numbers in path will be interpreted as a array indexes.
*/

const pathAsAString = 'some.like.string';
const nextStore = store.setIn(pathAsAString, 1); // { some: { like: { string: 1 } } }

const pathAsArray = ['some', 'like', 'string'];
const nextStore2 = store.setIn(pathAsArray, 1); // { some: { like: { string: 1 } } }

const pathWithNumbers = ['some', 1, 'string'];
const nextStore3 = store.setIn(pathWithNumbers, 1); // { some: [undefined, { string: 1 }] }

const pathWithNumbers2 = 'some.0.string';
const nextStore3 = store.setIn(pathWithNumbers2, 1); // { some: [{ string: 1 }] }
```

### get / getInOr
```js
import createSIS from 'simple-immutable-storage';

const store = createSIS(); // {}

const nextStore = store
  .setIn('user.name', 'Yevhenii')
  .setIn('user.age', 26)
  .setIn('user.skills.0', 'HTML'); // { user: { name: 'Yevhenii', age: 26, skills: ['HTML'] } }

const user = nextStore.get('user'); // { name: 'Yevhenii', age: 26, skills: ['HTML'] }

/*
String or array could be used as a path.
All numbers in path will be interpreted as a array indexes.
*/

// you can use either string or array as a path
const name = nextStore.getInOr('user.name'); // Yevhenii
const name2 = nextStore.getInOr(['user', 'name']); // Yevhenii

// return either undefined or default value 
const surname = nextStore.getInOr(['user', 'surname']); // undefined
const surnameWithDefault = nextStore.getInOr(['user', 'surname'], 'Hurynets'); // Hurynets

// getting value from array by index
const firstSkill = nextStore.getInOr('user.skills.0'); // HTML
```

### merge
```js
import createSIS from 'simple-immutable-storage';

const store = createSIS({ surname: 'Hurynets' }); // { surname: 'Hurynets' }
const data = {
    user: {
         name: 'Yevhenii',
         skills: ['HTML', 'JS']
    }
}

const nextStore = store.merge(data)

console.log(nextStore) /*
{
  surname: 'Hurynets',
  user: {
    name: 'Yevhenii',
    skills: ['HTML', 'JS']
  }
}
*/


const store2 = createSIS({
  user: {
    name: 'Yevhenii',
    skills: ['HTML', 'JS'],
    family: {
      mother: 'mom',
      father: 'dad'
    }
  }
});

// recursively merge same properties
const nextStore2 = merge(store2, {
  user: {
    name: 'Yevhenii Hurynets',
    skills: ['CSS'],
    family: {
      brother: 'bro'
    }
  }
});

console.log(nextStore2) /*
{
  user: {
    name: 'Yevhenii Hurynets',
    skills: ['HTML', 'JS', 'CSS'],
    family: {
      mother: 'mom',
      father: 'dad',
      brother: 'bro'
    }
  }
}
*/
```
