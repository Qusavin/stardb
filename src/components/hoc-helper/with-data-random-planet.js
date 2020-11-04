import PropTypes from 'prop-types';
import React, { Component, } from 'react';

import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';



const withDataRandomPlanet = (View) => {
	return class extends Component {
		static defaultProps = {
			updateInterval: 2000,
		}

		static propTypes = {
			updateInterval: PropTypes.number,
		}

		state = {
			planet  : {},
			loading : true,
			hasError: false,
		}

		componentDidMount() {
			const { updateInterval, } = this.props;
			this.updatePlanet();
			this.interval = setInterval(this.updatePlanet, updateInterval);
		}

		componentDidCatch() {
			console.log('Error');
		}

		componentWillUnmount() {
			clearInterval(this.interval);
		}

		onPlanetLoaded = (planet) => {
			const image = this.props.getPlanetImage(planet);
			this.setState({
				planet,
				loading: false,
				image,
			});
		}

		onError = (err) => {
			this.setState({
				hasError: true,
				loading : false,
			});
		}

		updatePlanet = () => {
			const id = Math.floor(Math.random() * 25) + 2;

			this.props
				.getPlanet(id)
				.then(this.onPlanetLoaded)
				.catch(this.onError);
		}

		render() {
			const { loading, planet, hasError, image, } = this.state;

			if (hasError) {
				return <ErrorIndicator />;
			}

			const spinner = loading ? <Spinner /> : null,
				content = !loading ? <View planet={planet} image={image} /> : null;

			return (
				<div className="random-planet jumbotron rounded">
					{spinner}
					{content}
				</div>
			);
		}
	};
};

export default withDataRandomPlanet;