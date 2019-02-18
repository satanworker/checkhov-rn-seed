import React from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'
import { prop } from 'styled-tools'

const Text = ({ children, ...rest }) => (
  <Element {...rest} >
    {children}
  </Element>
)

Text.propTypes = {
  children: PropTypes.node
}

const Element = styled.Text `
  color: ${ prop('theme.colors.exampleText') };
`

export default Text