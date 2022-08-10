# Design Decisions

For all things I thought about, made a decision and can't remeber why.

## PageProps

For Pages, use composition to create the final `T[componentName]Props` type.
This way, we use the composition inhernt in the `PageProps` type declaration.

Example:

```typescript
type TSomePageNameAdditionalProps = {
  pageTitle: string;
};
type TSomePageNameProps = PageProps & TVerticalPageLayoutAdditionalProps;
```

Notes:
This is only for pages in `pages/` dir
Not for components, for that, type it yourself and use what you need.

### Winning Thought

Because we are going to compose, and this might have and need more props later on.
Will be messy if declared in a line and not exported.

As for downsides,
Will have longer names for declaring additional props, but since those will usually not get exported, and we have intellisense, not too big of a deal.

### Other Thoughts

Could be decalred at the point of component creation
Too cluttered

Could just be tagged onto the original prop
Does not scale well.

## Import sorting

Ended up using "@trivago/prettier-plugin-sort-imports"
Instead of "eslint-plugin-simple-import-sort"

### Winning Thought

Eslint sorting is just maintained by a guy
Also the guy said prettier would be [better](https://github.com/lydell/eslint-plugin-simple-import-sort/issues/105)

Generally placing imports is more of a code style
And we have eslint linting imports
So generally as long as it works, it is alright

### Other thoughts

Trying out the eslint method is worth a try
Only thing I could think off that would push in other favor is import order mattered

## Page naming

Just follow naming convention of gatsby and use lowercase.
Also since we want the page rendering to be in lowercase as well.

### Winning Thought

Since it is already gatsby naming convention

### Other thoughts

Not worth and since we can be consistent, so we are using this.

## Adding emotion css

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
