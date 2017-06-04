import React from 'react'
import { element, string, object, node, oneOfType } from 'prop-types'
import mapFilters from 'map-css-filters'

const Filter = ({ filter, children, ...props }) => (
  <div {...props} style={{filter: mapFilters(filter)}}>
    {children}
  </div>
)

Filter.propTypes = {
  component: oneOfType([element, string]),
  filter: object.isRequired,
  children: node
}

export default Filter
