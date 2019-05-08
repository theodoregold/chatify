import React from "react";
import PropTypes from "prop-types";
// import dayjs from "dayjs";

import style from "../../helpers/style";

import "./Message.scss";



const Message = (props) => {
	const className = style.className("Message", props.className);

	if (props.self) className.push("Message--Self");
	if (props.message.type === "info") className.push("Message--Info");

	const date = new Intl.DateTimeFormat('default', {
		hour: "numeric",
		minute: "numeric"
	}).format(new Date(props.message.created));

	return (
		<div
			className={className.join(" ")}
		>
			<div className="Message__Meta">
				<span
					className="Message__Nickname"
				>
					{props.message.nickname}
				</span>

				<span
					className="Message__Date"
				>
					{date}
				</span>
			</div>

			<p className="Message__Body">
				{props.message.body}
			</p>
		</div>
	);
};

Message.propTypes = {
	className: PropTypes.string,

	message: PropTypes.shape({
		id: PropTypes.string.isRequired,
		type: PropTypes.string,
		body: PropTypes.string.isRequired,
		nickname: PropTypes.string,
		created: PropTypes.string.isRequired,
	}).isRequired,
};



export default Message;
