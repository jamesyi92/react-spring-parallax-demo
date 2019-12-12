import React, { Component, Fragment } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import styled from 'styled-components';

import Board from '../images/planning-board.inline.svg';
import People from '../images/planning-people.inline.svg';
import Button from '../components/Button';

const BgLayer = styled(ParallaxLayer)`
	background: linear-gradient(to right, #716598 0%, #716598 40%, #716598 40%, #ffffff 40%, #ffffff 100%);
	z-index: 5;
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

const BoardLayer = styled(ParallaxLayer)`
	display: grid;
	grid-template-columns: 40% 60%;
	align-items: center;
	z-index: 6;

	svg {
		max-width: 100%;
		transform: translate(25%, -10%);
	}
`
const PeopleLayer = styled(ParallaxLayer)`
	display: grid;
	align-items: center;
	grid-template-columns: 40% 60%;
	align-items: center;
	z-index: 7;

	svg {
		max-width: 100%;
		transform: translate(25%, 20%);
	}
`


class PlanningLayer extends Component {
	render() {
		return (
			<Fragment>

				<ContentLayer offset={2} speed={0.3} factor={1}>
					<Content>
        		<h1>Lorem ipsum dolor</h1>
        		<p>Beatae architecto totam dolores. Voluptas id a, optio iure odit, accusamus quam cumque cupiditate officiis atque exercitationem hic, modi architecto sed! Cumque.</p>
        		<Button onClick={e => this.props.clickHandler(0)}>
        			Go Next
        		</Button>
        	</Content>
				</ContentLayer>

				<BgLayer offset={2} speed={0.1} factor={1.1}></BgLayer>

        <BoardLayer offset={2} speed={.8} factor={1}>
					<Board />
				</BoardLayer>

				<PeopleLayer offset={2} speed={.3} factor={1}>
					<People />
				</PeopleLayer>

			</Fragment>
		);
	}
}


export default PlanningLayer;