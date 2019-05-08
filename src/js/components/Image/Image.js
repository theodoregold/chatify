import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import style from "../../helpers/style";

import "./Image.scss";



export default class Image extends PureComponent {
	state = {
		loaded: false,
		cached: false,
	}

	componentDidMount() {
		if (this.image.complete && this.image.naturalHeight > 0) this.onCached();
	}

	onCached = () => {
		this.setState({
			cached: true,
		});

		this.props.onLoad();
	}

	onLoad = () => {
		const {loaded, cached} = this.state;

		if (loaded || cached) return;

		this.setState({
			loaded: true,
		});

		this.props.onLoad();
	}

	onRef = (ref) => {
		this.image = ref;
	}

	render() {
		const {src, alt} = this.props;
		const {loaded, cached} = this.state;

		const className = style.className("Image", this.props.className);

		if (cached) className.push("Image--Cached");
		if (loaded) className.push("Image--Loaded");

		return (
			<div
				className={className.join(" ")}
			>
				<img
					ref={this.onRef}
					src={src}
					alt={alt}
					className="Image__Image"
					onLoad={this.onLoad}
				/>
			</div>
		);
	}
}

Image.defaultProps = {
	onLoad: () => null,
};

Image.propTypes = {
	className: PropTypes.string,

	src: PropTypes.string.isRequired,
	alt: PropTypes.string,

	onLoad: PropTypes.func,
};
