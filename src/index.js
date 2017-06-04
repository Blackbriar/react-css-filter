import React from 'react'
import { render } from 'react-dom'

import Filter from './Filter'
import Blur from './Filters/Blur'
import Brightness from './Filters/Brightness'

const App = () => (
  <div>
    <Filter filter={{opacity: '1', grayscale: '50%'}}>WhAt?</Filter>
    <Blur value='2px'><div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</div></Blur>
    <Brightness value={0.5}><img src='https://www.mozilla.org/media/img/logos/firefox/logo-wordmark-large-noshadow-high-res.6b2d4bdb28d8.png' /></Brightness>
  </div>
)

render(
  <App />,
  document.getElementById('app')
)
