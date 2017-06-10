import React from 'react'
import styled from 'styled-components'
import { object, node } from 'prop-types'
import mapFilters from 'map-css-filters'

const FilterWrapper = styled.div`
  filter: ${props => mapFilters(props.effects)};
`

const Filter = ({ children, ...props }) =>
  <FilterWrapper {...props}>
    {children}
  </FilterWrapper>

Filter.propTypes = {
  effects: object.isRequired,
  children: node
}

export default Filter
