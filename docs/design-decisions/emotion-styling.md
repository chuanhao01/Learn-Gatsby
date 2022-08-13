# Adding emotion css

Need to add:

```javascript
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
```

Also, to ignore eslint error:

```javascript
  "@typescript-eslint/no-unused-vars": [
    "error",
    { varsIgnorePattern: "jsx" },
  ]
```
