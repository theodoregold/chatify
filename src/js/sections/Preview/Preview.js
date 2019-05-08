import React, {PureComponent} from "react";

import Column from "../../components/Column";
import Section from "../../components/Section";
import Logo from "../../components/Logo";
import Title from "../../components/Title";
import Container from "../../components/Container";
import Paragraph from "../../components/Paragraph";

import Nav from "../../sections/Nav";

import "./Preview.scss";



export default class Preview extends PureComponent {
	render() {
		return (
			<Column
				half
				className="Preview"
			>
				<div className="Preview__Background" />

				<Nav className="Preview__Nav" transparent>
					<Logo white className="Preview__Logo" />
				</Nav>

				<Section>
					<Container tiny>
						<div className="Preview__Wrap">
							<Title large className="Preview__Title">
								You want to have a chat?
							</Title>

							<Paragraph className="Preview__Paragraph">
								We have the most vibrant chat community.
							</Paragraph>
						</div>

						<Paragraph small className="Preview__Note">
							Our app is backed by Q Combinator.<br />We recently raised $5 million Monopoly dollars.
						</Paragraph>
					</Container>
				</Section>
			</Column>
		);
	}
}
