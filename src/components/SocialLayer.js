import React, { Component, Fragment } from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import styled from 'styled-components';

import Social from '../images/social-icons.inline.svg';
import Monitor from '../images/social-monitor.inline.svg';
import Button from '../components/Button';

import { device } from '../utils/devices';

const BgLayer = styled(ParallaxLayer)`
	background: #f7f7f7;

	@media ${device.lg} {
		background: linear-gradient(to right, #9499EA 0%, #9499EA 40%, #9499EA 40%, #ffffff 40%, #ffffff 100%);
	}

`

const ContentLayer = styled(ParallaxLayer)`
	display: grid;
	grid-template-columns: 1fr;
	padding: 0 3rem;
	align-items: center;
	z-index: 11;

	@media ${device.lg} {
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 6rem;
		padding: 0;
	}
`

const Content = styled.div`
	grid-column: 2/3;
	width: 100%;

	@media ${device.lg} {
		width: 80%;
	}

	h1 {
		font-size: 5rem;
		text-transform: capitalize;
		line-height: 1.1;
		color: #20202C;
		margin-bottom: 3rem;
	}

	p {
		font-size: 2.4rem;
		line-height: 1.45;
		color: #20202C;
		margin-bottom: 3rem;
	}
`

const IconLayer = styled(ParallaxLayer)`
	display: grid;
	grid-template-columns: 1fr;
	align-items: center;
	z-index: 2;

	@media ${device.lg} {
		grid-template-columns: 40% 60%;
	}

	svg {
		max-width: 100%;
		width: 100%;
		opacity: .3;

		@media ${device.lg} {
			transform: translate(25%, -40%);
			opacity: 1;
		}
	}
`
const MonitorLayer = styled(ParallaxLayer)`
	display: grid;
	align-items: center;
	grid-template-columns: 1fr;
	align-items: center;

	@media ${device.lg} {
		grid-template-columns: 40% 60%;
	}

	svg {
		max-width: 100%;
		width: 100%;
		opacity: .3;
		@media ${device.lg} {
			transform: translateX(25%);
			opacity: 1;
		}
	}
`


class SocialLayer extends Component {
	render() {
		return (
			<Fragment>

				<ContentLayer offset={0} speed={0.3} factor={1}>
					<Content>
        		<h1>Lorem ipsum dolor</h1>
        		<p>Beatae architecto totam dolores. Voluptas id a, optio iure odit, accusamus quam cumque cupiditate officiis atque exercitationem hic, modi architecto sed! Cumque.</p>
        		<Button onClick={e => this.props.clickHandler(1)}>
        			Go Next
        		</Button>
        	</Content>
				</ContentLayer>

				<BgLayer offset={0} speed={0.1} factor={1.1}></BgLayer>

        <IconLayer offset={0} speed={.8} factor={1}>
					<Social />
				</IconLayer>

				<MonitorLayer offset={0} speed={.3} factor={1}>
					<Monitor />
				</MonitorLayer>


			</Fragment>
		);
	}
}


export default SocialLayer;