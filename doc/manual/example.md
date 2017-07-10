# Example

```js
import * as number from '@aureooms/js-number' ;
import { cartesian } from '@aureooms/js-complex' ;
let kernel = cartesian.kernel.compile( number , 'i' ) ;
let { add , sub , mul , div } = cartesian.array.compile( kernel ) ;
```
