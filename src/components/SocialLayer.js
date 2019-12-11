import React, { Component, Fragment } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import styled from 'styled-components';

import Social from '../images/social-icons.inline.svg';
import Monitor from '../images/social-monitor.inline.svg';
import Button from '../components/Button';

const BgLayer = styled(ParallaxLayer)`
	background: linear-gradient(to right, #9499EA 0%, #9499EA 40%, #9499EA 40%, #ffffff 40%, #ffffff 100%);
`

const ContentLayer = styled(ParallaxLayer)`
	display: grid;
	grid-template-columns: 50% 50%;
	grid-gap: 60px;
	align-items: center;
	z-index: 11;
`

const Content = styled.div`
	grid-column: 2/3;
	width: 80%;

	h1 {
		font-size: 50px;
		text-transform: capitalize;
		line-height: 1.1;
		color: #20202C;
		margin-bottom: 30px;
	}

	p {
		font-size: 24px;
		line-height: 1.45;
		color: #20202C;
		margin-bottom: 30px;
	}
`

const IconLayer = styled(ParallaxLayer)`
	display: grid;
	grid-template-columns: 40% 60%;
	align-items: center;
	z-index: 2;

	svg {
		max-width: 100%;
		transform: translate(25%, -40%);
	}
`
const MonitorLayer = styled(ParallaxLayer)`
	display: grid;
	align-items: center;
	grid-template-columns: 40% 60%;
	align-items: center;

	svg {
		max-width: 100%;
		transform: translateX(25%);
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