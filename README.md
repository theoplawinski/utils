# 🛠 Utils
Collection of reusable utility functions for web development.

## How to use?

Utils collection isn't published on npm and not compiled.
To use it, you have to copy/past the needed script in your project.

## Functions

### Array

#### [ArrayEquals](https://github.com/theoplawinski/utils/blob/main/array/arrayEquals.ts)

Checks if the arrays are equal

```typescript
import { arrayEquals } from "./array/arrayEquals";

const a = ["foo", "bar"];
const b = ["foo"];
const c = ["foo", "bar"];

arrayEquals(a, b); // false
arrayEquals(a, c); // true
```

#### [InArray](https://github.com/theoplawinski/utils/blob/main/array/inArray.ts)

Searches an array for the specified value

```typescript
import { inArray } from "./array/inArray";

const array = ["foo", "bar"];
const a = "foo";
const b = "Bar";

inArray(array, a); // true
inArray(array, b); // false
```

#### [OccurrencesInArray](https://github.com/theoplawinski/utils/blob/main/array/occurrencesInArray.ts)

Searches an array for all the occurrences of the specified value

```typescript
import { occurrencesInArray } from "./array/occurrencesInArray";

const array = ["foo", "bar", "foo"];
const a = "foo";
const b = "bar";

occurrencesInArray(array, a); // 2
occurrencesInArray(array, b); // 1
```

#### [RemoveInArray](https://github.com/theoplawinski/utils/blob/main/array/removeInArray.ts)

Removes an item from the array. Removes all its references if multi is set to `true`

```typescript
import { removeInArray } from "./array/removeInArray";

const array = [1, 2, 3, 1, 2, 3];

removeInArray(array, 2); // [1, 3, 1, 2, 3]
removeInArray(array, 2, true); // [1, 3, 1, 3]
```

#### [UniquifyArray](https://github.com/theoplawinski/utils/blob/main/array/uniquifyArray.ts)

Removes occurrences from the specified array

```typescript
import { uniquifyArray } from "./array/uniquifyArray";

const array = ["foo", "bar", "foo"];

uniquifyArray(array); // ["foo", "bar"]
```

### Math

#### [Clamp](https://github.com/theoplawinski/utils/blob/main/math/clamp.ts)

Clamps a value between the specified lower and upper bound

```typescript
import { clamp } from "./math/clamp";

clamp(24, 20, 30) // 24
clamp(12, 20, 30) // 20
clamp(32, 20, 30) // 30
```

#### [Lerp](https://github.com/theoplawinski/utils/blob/main/math/lerp.ts)

Returns the value between two numbers at a specified, decimal midpoint

```typescript
import { lerp } from "./math/lerp";

lerp(20, 80, 0)   // 20
lerp(20, 80, 1)   // 80
lerp(20, 80, 0.5) // 40
```

#### [RandomBool](https://github.com/theoplawinski/utils/blob/main/math/randomBool.ts)

Returns true or false

```typescript
import { randomBool } from "./math/randomBool";

randomBool(); // true or false
```

#### [RandomRange](https://github.com/theoplawinski/utils/blob/main/math/randomRange.ts)

Returns a random number between the specified values

```typescript
import { randomRange } from "./math/randomRange";

randomRange(25, 100); // Output between 25-100
```

#### [RandomTo](https://github.com/theoplawinski/utils/blob/main/math/randomTo.ts)

Returns a random number between 0 and the specified value, excluded

```typescript
import { randomTo } from "./math/randomTo";

randomTo(25); // Output between 0-24
```

### String

#### [Limit](https://github.com/theoplawinski/utils/blob/main/string/limit.ts)

Limits the string to `n` character

```typescript
import { limit } from "./string/limit";

const str = "Some str";

limit(str, 4); // "Some"
```

#### [Slugify](https://github.com/theoplawinski/utils/blob/main/string/slugify.ts)

Converts a string into a slug

```typescript
import { slugify } from "./string/slugify";

const str = "Some str";

slugify(str); // "some-str"
```

### Etc.

#### [IsHandheldDevice](https://github.com/theoplawinski/utils/blob/main/functions/isHandheldDevice.ts)

Detects if it's a handheld device

```typescript
import { isHandheldDevice } from "./functions/isHandheldDevice";

isHandheldDevice(); // true or false
```

## Licence

[MIT](LICENSE)
