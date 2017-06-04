import React from 'react'

export default ({ value, children, ...props }) => <div {...props} style={{filter: `brightness(${value})`}}>{children}</div>
