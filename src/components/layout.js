import React from 'react'
import PropTypes from 'prop-types'
import { Normalize } from 'styled-normalize'
import { GlobalStyle } from '../utils/GlobalStyle';


const Layout = ({ children }) => {

  return (
    <React.Fragment>
    	<GlobalStyle />
      <Normalize />
      <main>
        {children}
      </main>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
