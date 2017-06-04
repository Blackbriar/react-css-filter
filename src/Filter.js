import React, { createElement } from 'react'
import { element, string, object, node, oneOfType } from 'prop-types'
import { mapFilters } from './utils'

const Filter = ({ component = 'div', className, filter, children }) => {
  const c = createElement(component)
  return (
    <c.type className={className} style={{filter: mapFilters(filter)}}>
      {children}
    </c.type>
  )
}

Filter.propTypes = {
  component: oneOfType([element, string]),
  className: string,
  filter: object.isRequired,
  children: node
}

export default Filter
