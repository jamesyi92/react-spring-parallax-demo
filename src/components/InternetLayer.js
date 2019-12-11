import React, { Component, Fragment } from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import styled, { keyframes } from 'styled-components';

import Person from '../images/product-person.inline.svg';
import Wave1 from '../images/product-wave-1.inline.svg';
import Wave2 from '../images/product-wave-2.inline.svg';
import Button from '../components/Button';

const BgLayer = styled(ParallaxLayer)`
	background: #479887;
`

const ContentLayer = styled(ParallaxLayer)`
	display: grid;
	grid-template-columns: 50% 50%;
	grid-gap: 60px;
	align-items: center;
	justify-items: center;
	z-index: 11;
`

const Content = styled.div`
	grid-column: 1/2;
	width: 50%;

	h1 {
		font-size: 50px;
		text-transform: capitalize;
		line-height: 1.1;
		color: #ffffff;
		margin-bottom: 30px;
	}

	p {
		font-size: 24px;
		line-height: 1.45;
		color: #ffffff;
		margin-bottom: 30px;
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
		width: 500px;
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



class InternetLayer extends Component {
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

				<BgLayer offset={1} speed={0.1} factor={1}></BgLayer>

        <PersonLayer offset={1} speed={.8} factor={1}>
					<Person />
				</PersonLayer>

				<Wave1Layer offset={1} speed={.1} factor={1}>
					<Wave1 />
				</Wave1Layer>

				<Wave2Layer offset={1} speed={.3} factor={1.15}>
					<Wave2 />
				</Wave2Layer>


			</Fragment>
		);
	}
}


export default InternetLayer;