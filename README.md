# react-css-filter

A CSS Filter wrapper as a React component.

⚠️ WORK IN PROGRESS!

## Usage:

```sh
yarn add react-css-filter
```

* Import Filter component
* Declare and pass an `effects` object with desired filter effects. Please, see [CSS Filter documentation](https://developer.mozilla.org/en/docs/Web/CSS/filter?v=control) for all the options.

```javascript
import React from 'react'
import Filter from 'react-css-filter'

const App = () => (
  <Filter effects={{'drop-shadow': '2px 2px 3px #08C', sepia: '60%'}}>Forever and a day...</Filter>
)
```
