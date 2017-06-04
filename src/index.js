import React from 'react'
import { render } from 'react-dom'

import Filter from './Filter'

const App = () => (
  <Filter filter={{blur: '1px', opacity: '1', grayscale: '50%'}}>WhAt?</Filter>
)

render(
  <App />,
  document.getElementById('app')
)
