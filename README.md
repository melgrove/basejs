### Things I want in javascript  
  
Import tools into global scope (somewhat scary)
```javascript
require('@melgrove/base')();

// can use as a global variable
unreduce()
type() 
// ...
```  
  
Import tools into object (not scary)
```javascript
const tools = require('@melgrove/base')({global: false});

// can use from tools
tools.unreduce()
tools.type()
// ...
```
