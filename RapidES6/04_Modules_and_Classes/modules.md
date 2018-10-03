## Module
- file containing JS code

- no special "module" keyword
- automatic strict mode code even if you don't write "strict mode"
- use "import" and "export"

- Everything declared inside a module is local to a module, by default.
- "export" is use to make the locals to public
- can export any top-level function, class, var, let, or const.
- When you run a module containing an import declaration, the modules it imports are loaded first, then each module body is executed in a depth-first traversal of the dependency graph, avoiding cycles by skipping anything already executed.

```
// welcome.js
export function helloWorld(){

}

export class Hello {

}

export var productId = 10;


// welcomeAgain.js
import { productId } from "welcome.js";
import { productId, productName } from "welcome.js";
```


## export lists

`export { helloWorld, hello, productId }`

`function helloWorld() { ... };`
`class Hello { ... };`
`var productId = 10;`

Q: Does `export` list need to be first thing in the file ?
A: No, it can be appear anywhere in the module file's top-level scope.

Q: can have multiple export lists, or mix export lists with other export declarations ?
A: Yes, as long as no name is exported more than once.

## Renaming imports and exports

`import { productId as Id, productName as name } from "welcome.js"`

```
function v1() { ... }
function v2() { ... }

export {
	v1 as version1,
	v2 as version2,
	v2 as latestVersion
}
```

## Default exports

```
import _ from "lodash";
import {default as _} from "lodash";

let myObject = {
  field1: value1,
  field2: value2
};
export {myObject as default};

or

export default {
  field1: value1,
  field2: value2
};

```

- The keywords export default can be followed by any value: a function, a class, an object literal, you name it.

## Module object

`import * as lib from "welcome.js"`

Q: What happen when you write "import *" ?
A: It import a "module namespace object".

Q: What the properties will be for this obejct ?
A: All the exports 
Example. lib.productId , lib.helloWorld()




https://hacks.mozilla.org/2015/08/es6-in-depth-modules/
https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/
