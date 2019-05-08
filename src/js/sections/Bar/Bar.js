import React, {PureComponent} from "react";
import {bindActionCreators} from "redux";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

import style from "../../helpers/style";
import validator from "../../helpers/validator";

import * as messageActions from "../../actions/message";

import MessageModel from "../../models/message";

import Section from "../../components/Section";
import Container from "../../components/Container";
import InputMessage from "../../components/InputMessage";
import Form from "../../components/Form";
import Button from "../../components/Button";

import "./Bar.scss";



const mapStateToProps = (state) => {
	return {
		chat: state.chat,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		actions: {
			message: bindActionCreators(messageActions, dispatch),
		},
	};
};

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
export default class Bar extends PureComponent {
	state = {
		form: {
			message: "",
		},

		errors: {
			message: [],
		},

		loader: false,
	}


	onKeyDown = (e) => {
		if (e.key === "Enter") {
			e.preventDefault();

			this.onSubmit();
		}
	};

	onChange = (value, name, e) => {
		const {form, errors} = this.state;

		let messages = [];

		if (errors[name].length) {
			messages = validator.single({
				...form,
				[name]: value,
			}, name, MessageModel.send);
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

	onSubmit = async () => {
		const {actions} = this.props;
		const {form, loader} = this.state;

		// check if form was already submitted
		if (loader) return;

		const errors = validator.all(form, MessageModel.send);

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

		await actions.message.outgoing(form);

		this.setState({
			loader: false,
			form: {
				message: "",
			}
		});
	}

	render() {
		const className = style.className("Bar", this.props.className);

		const {chat} = this.props;
		const {form, errors} = this.state;

		return (
			<Section className={className.join(" ")}>
				<Container className="Bar__Container">
					<div className="Bar__Wrap">
						<Form 
							className="Bar__Form"
							onSubmit={this.onSubmit}
							onKeyDown={this.onKeyDown}
						>
							<InputMessage
								name="message"
								value={form.message}
								placeholder="Type your message and hit enter"
								onChange={this.onChange}
								errors={errors.message}
								disabled={!chat}
							/>
						</Form>
					</div>
				</Container>
			</Section>
		);
	}
}
