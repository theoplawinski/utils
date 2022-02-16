# 🛠 Utils
Collection of reusable utility functions for web development.

## How to use?

Utils collection isn't published on npm and not compiled.
To use it, you have to copy/past the needed script in your project.

## Functions

### Math

**[Clamp](https://github.com/theoplawinski/utils/blob/main/math/clamp.ts)**

Clamps a value between an lower and upper bound

```javascript
import { clamp } from "./math/clamp";

const value = clamp(100, 0, 25); // 25
```

**[Lerp](https://github.com/theoplawinski/utils/blob/main/math/lerp.ts)**

Linear interpolation from start to end using the specified alpha

```javascript
import { lerp } from "./math/lerp";

const value = lerp(25, 100, 0.1); // 32.5
```

**[Rand](https://github.com/theoplawinski/utils/blob/main/math/rand.ts)**

Returns a random number between the specified values

```javascript
import { rand } from "./math/rand";

const value = rand(0, 100); // Output between 0-100
```

## Licence

[MIT](LICENSE)
