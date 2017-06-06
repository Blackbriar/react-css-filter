import React from 'react'
import { element, string, object, node, oneOfType } from 'prop-types'
import mapFilters from 'map-css-filters'

const Filter = ({ effects, children, ...props }) => (
  <div {...props} style={{filter: mapFilters(effects)}}>
    {children}
  </div>
)

Filter.propTypes = {
  component: oneOfType([element, string]),
  effects: object.isRequired,
  children: node
}

export default Filter
