import React, {PureComponent} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import AuthModel from "../../models/auth";

import scrollHelper from "../../helpers/scroll";

import Screen from "../../components/Screen";
import Section from "../../components/Section";
import Container from "../../components/Container";
import Wrap from "../../components/Wrap";
import Logo from "../../components/Logo";
import Button from "../../components/Button";
import Paragraph from "../../components/Paragraph";
import Loader from "../../components/Loader";
import Title from "../../components/Title";
import Message from "../../components/Message";

import Nav from "../../sections/Nav";
import Bar from "../../sections/Bar";

import * as authActions from "../../actions/auth";
import * as chatActions from "../../actions/chat";

import "./List.scss";



const mapState = (state) => {
	return {
		message: state.message,
	};
};

const mapDispatch = (dispatch) => {
	return {
		actions: {
			auth: bindActionCreators(authActions, dispatch),
			chat: bindActionCreators(chatActions, dispatch),
		},
	};
};

@connect(mapState, mapDispatch)
export default class List extends PureComponent {
	shouldScroll = true

	componentDidMount() {
		const {actions} = this.props;

		actions.chat.connect();
	}

	componentWillUpdate(nextProps) {
		this.shouldScroll = scrollHelper.update();
	}

	componentDidUpdate() {
		if (this.shouldScroll) scrollHelper.bottom();
	}

	componentWillUnmount() {
		const {actions} = this.props;

		actions.chat.disconnect();
	}

	onLogout = async () => {
		const {actions} = this.props;

		actions.chat.disconnect();
		actions.auth.logout();
	}

	renderMessage = (message) => {
		return (
			<Message key={message.id} message={message} />
		);
	}

	render() {
		const {message} = this.props;

		const content = message.map(this.renderMessage);

		return (
			<Screen
				title="Chat"
				className="ChatListScreen"
			>

				<Nav
					className="ChatListScreen__Nav"
					fixed
				>
					<Logo />

					<Paragraph className="ChatListScreen__Disconnect">
						Enough chatting? <Button auto light onClick={this.onLogout}>Leave</Button>
					</Paragraph>
				</Nav>

				<Section
					className="ChatListScreen__Section"
				>
					<Container
						className="ChatListScreen__Container"
					>
						{content}
					</Container>
				</Section>

				<Bar />
			</Screen>
		);
	}
}
