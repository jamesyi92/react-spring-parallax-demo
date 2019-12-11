import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { Normalize } from 'styled-normalize'


const Layout = ({ children }) => {

  return (
    <React.Fragment>
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
