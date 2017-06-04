import React, { createElement } from 'react'
import { element, string, object, node, oneOfType } from 'prop-types'
import mapFilters from 'map-css-filters'

const Filter = ({ component = 'div', filter, children, ...props }) => {
  const c = createElement(component)
  return (
    <c.type {...props} style={{filter: mapFilters(filter)}}>
      {children}
    </c.type>
  )
}

Filter.propTypes = {
  component: oneOfType([element, string]),
  filter: object.isRequired,
  children: node
}

export default Filter
