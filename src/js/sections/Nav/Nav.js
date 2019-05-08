import React, {memo} from "react";
import PropTypes from "prop-types";

import style from "../../helpers/style";

import Container from "../../components/Container";

import "./Nav.scss";



const Nav = (props) => {
	const className = style.className("Nav", props.className);

	if (props.transparent) className.push("Nav--Transparent");
	if (props.fixed) className.push("Nav--Fixed");

	return (
		<nav className={className.join(" ")}>
			<Container className="Nav__Container">
				{props.children}
			</Container>
		</nav>
	);
};

Nav.propTypes = {
	className: PropTypes.string,

	transparent: PropTypes.bool,
	fixed: PropTypes.bool,

	children: PropTypes.any,
};



export default Nav;
