import React, { Component, Fragment } from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import styled, { keyframes } from 'styled-components';

import Person from '../images/product-person.inline.svg';
import Wave1 from '../images/product-wave-1.inline.svg';
import Wave2 from '../images/product-wave-2.inline.svg';
import Button from '../components/Button';

import { device } from '../utils/devices';

const BgLayer = styled(ParallaxLayer)`
	background: #479887;
`

const ContentLayer = styled(ParallaxLayer)`
	display: grid;
	grid-template-columns: 1fr;
	padding: 0 3rem;
	align-items: center;
	justify-items: center;
	z-index: 11;

	@media ${device.lg} {
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 6rem;
		padding: 0;
	}
`

const Content = styled.div`
	grid-column: 1/2;
	width: 100%;

	@media ${device.lg} {
		width: 80%;
		margin-left: 6rem;
	}

	h1 {
		font-size: 5rem;
		text-transform: capitalize;
		line-height: 1.1;
		color: #ffffff;
		margin-bottom: 3rem;
	}

	p {
		font-size: 2.4rem;
		line-height: 1.45;
		color: #ffffff;
		margin-bottom: 3rem;
	}
`

const PersonLayer = styled(ParallaxLayer)`
	display: grid;
	grid-template-columns: 40% 60%;
	align-items: center;
	justify-items: center;
	z-index: 2;

	svg {
		grid-column: 2/3;
		max-width: 100%;
		width: 50rem;
		height: auto;
	}
`

const animateWave1 = keyframes`
	0% {
    transform: scale(1, .6);
  }
  100% {
    transform: scale(1,1);
  }
`

const animateWave2 = keyframes`
	0% {
    transform: scale(1, .8);
  }
  100% {
    transform: scale(1,1);
  }
`

const Wave1Layer = styled(ParallaxLayer)`
	width: 100%;
	height: 100%;
	z-index: 1;

	svg {
		position: absolute;
		bottom: 10%;
		max-width: 100%;
		width: 100%;
		bottom: 0;
		opacity: .1;
		transform-origin: bottom;
		animation: ${animateWave1} 8s ease-in-out -8s infinite alternate forwards running;
	}
`

const Wave2Layer = styled(ParallaxLayer)`
	width: 100%;
	height: 100%;
	z-index: 1;
	display: none;

	@media ${device.lg} {
		display: block;
	}

	svg {
		position: absolute;
		bottom: 10%;
		max-width: 100%;
		width: 100%;
		bottom: 0;
		opacity: .3;
		transform-origin: bottom;
		animation: ${animateWave2} 8s ease-in-out -8s infinite alternate forwards running;
	}
`



class ProductLayer extends Component {
	render() {
		return (
			<Fragment>

				<ContentLayer offset={1} speed={0.3} factor={1}>
					<Content>
        		<h1>Lorem ipsum dolor</h1>
        		<p>Beatae architecto totam dolores. Voluptas id a, optio iure odit, accusamus quam cumque cupiditate officiis atque exercitationem hic, modi architecto sed! Cumque.</p>
        		<Button onClick={e => this.props.clickHandler(2)}>
        			Go Next
        		</Button>
        	</Content>
				</ContentLayer>

				<BgLayer offset={1} speed={0.1} factor={1.15}></BgLayer>

        <PersonLayer offset={1} speed={.8} factor={1}>
					<Person />
				</PersonLayer>

				<Wave1Layer offset={1} speed={.1} factor={1.1}>
					<Wave1 />
				</Wave1Layer>

				<Wave2Layer offset={1} speed={.3} factor={1.1}>
					<Wave2 />
				</Wave2Layer>


			</Fragment>
		);
	}
}


export default ProductLayer;