import React, {PureComponent} from 'react';

import Logo from '../../components/Logo';
import Screen from '../../components/Screen';
import Section from '../../components/Section';
import Wrap from '../../components/Wrap';
import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';
import ButtonLink from '../../components/ButtonLink';
import Container from '../../components/Container';

import Nav from '../../sections/Nav';

import './NotFound.scss';



export default class NotFound extends PureComponent {
	render() {
		return (
			<Screen
				title="404"
				className={["CodeNotFoundScreen"]}
			>
				<Nav>
					<Logo />
				</Nav>

				<Section>
					<Container small>
						<Wrap>
							<Title>
								404
							</Title>

							<Paragraph large>We searched everywhere, but couldn't find the page you were looking.
							</Paragraph>

							<Paragraph>Try to go back to <ButtonLink to="/">Home</ButtonLink> or contact our help team.
							</Paragraph>
						</Wrap>
					</Container>
				</Section>
			</Screen>
		);
	}
}
