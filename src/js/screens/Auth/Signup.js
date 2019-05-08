import React, {PureComponent} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import AuthModel from '../../models/auth';

import helpers from '../../helpers';

import Screen from '../../components/Screen';
import Section from '../../components/Section';
import Wrap from '../../components/Wrap';
import Banner from '../../components/Banner';
import Column from '../../components/Column';
import Form from '../../components/Form';
import Title from '../../components/Title';
import Input from '../../components/Input';
import Button from '../../components/Button';
import ButtonLink from '../../components/ButtonLink';
import Container from '../../components/Container';
import Paragraph from '../../components/Paragraph';

import Nav from '../../sections/Nav';
import Preview from '../../sections/Preview';

import * as authActions from '../../actions/auth';

import './Signup.scss';



const mapState = (state) => {
	return {
		user: state.user,
	};
};

const mapDispatch = (dispatch) => {
	return {
		actions: {
			auth: bindActionCreators(authActions, dispatch),
		},
	};
};

@connect(mapState, mapDispatch)
export default class Signup extends PureComponent {
	state = {
		loader: false,

		messages: [],

		form: {
			nickname: "",
		},

		errors: {
			nickname: [],
		},
	}

	onChange = (value, name) => {
		const {form, errors} = this.state;

		let messages = [];

		if (errors[name].length) {
			messages = helpers.validator.single({
				...form,
				[name]: value,
			}, name, AuthModel.signup);
		}

		this.setState({
			form: {
				...form,
				[name]: value,
			},
			errors: {
				...errors,
				[name]: messages,
			},
		});
	};

	onSubmit = async (e) => {
		e.preventDefault();

		const {actions, history} = this.props;
		const {form, loader} = this.state;

		// check if form was already submitted
		if (loader) return;

		const errors = helpers.validator.all(form, AuthModel.signup);

		// set errors and return
		if (errors) {
			this.setState({
				errors: {
					...this.state.errors,
					...errors,
				},
			});

			return;
		}

		this.setState({
			loader: true,
		});

		const response = await actions.auth.signup(form);

		if (response.errors) {
			console.log(response.errors);

			const update = {
				errors: {
					...this.state.errors,
					...response.errors.inputs,
				},
				loader: false,
			};

			if (response.errors.messages) update.messages = response.errors.messages;

			this.setState(update);

			return false;
		}

		history.push({
			pathname: "/chat",
		});
	}

	render() {
		const {form, errors, messages, loader} = this.state;

		return (
			<Screen
				title="Signup"
				className="AuthSignupScreen"
			>
				<Preview />

				<Column half className="AuthSignupScreen__Column">
					<Nav />

					<Section>
						<Container tiny>
							<Wrap>
								<Form
									onSubmit={this.onSubmit}
								>
									<Title>
										Lets get you started!
									</Title>

									<Banner title="Note!" messages={["Chat server is hosted on Heroku Free tier. This means it could take a couple of extra seconds before the first response."]} type="warning" />

									{
										!!messages.length &&
										<Banner messages={messages} type="error" />
									}

									<Form.Group>
										<Input
											name="nickname"
											placeholder="Nickname"
											value={form.nickname}
											errors={errors.nickname}
											onChange={this.onChange}
										/>
									</Form.Group>

									<Button
										className="SignupScreen__Submit"
										loader={loader}
										margin
									>
										Signup
									</Button>
								</Form>
							</Wrap>
						</Container>
					</Section>
				</Column>
			</Screen>
		);
	}
}
