import React, { Component } from 'react'
import styled from 'styled-components';
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Parallax } from 'react-spring/renderprops-addons';
import SocialLayer from '../components/SocialLayer';
import ProductLayer from '../components/ProductLayer';
import PlanningLayer from '../components/PlanningLayer';

const StyledParallax = styled(Parallax)`
  left: 0;
  top: 0;
  overflow: scroll;
`


class IndexPage extends Component {

  clickHandler = num => {
    this.parallax.scrollTo(num)
  }

  render() {
    return (
      <Layout>
        <SEO title="React Spring Parallax Example" />
        <StyledParallax ref={ref => (this.parallax = ref)} pages={3}>
          <SocialLayer clickHandler={this.clickHandler} />
          <ProductLayer clickHandler={this.clickHandler} />
          <PlanningLayer clickHandler={this.clickHandler} />
        </StyledParallax>
      </Layout>
    )
  }
}

export default IndexPage

