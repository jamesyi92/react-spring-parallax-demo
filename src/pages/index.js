import React, { Component } from 'react'
import styled from 'styled-components';
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import SocialLayer from '../components/SocialLayer';
import InternetLayer from '../components/InternetLayer';
import Button from '../components/Button';

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
        <StyledParallax ref={ref => (this.parallax = ref)} pages={3}>
          <SocialLayer clickHandler={this.clickHandler} />
          <InternetLayer clickHandler={this.clickHandler} />
        </StyledParallax>
      </Layout>
    )
  }
}

export default IndexPage

