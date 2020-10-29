import React, { Component, } from 'react';

import SwapiService from '../../services/swapi-service';
import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';

import PlanetView from './planet-view';

import './random-planet.css';


export default class RandomPlanet extends Component {
	swapiService = new SwapiService();

	state = {
		planet  : {},
		loading : true,
		hasError: false,
	}

	componentDidMount() {
		this.updatePlanet();
		this.interval = setInterval(this.updatePlanet, 1500);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	onPlanetLoaded = (planet) => {
		this.setState({ planet, loading: false, });
	}

	onError = (err) => {
		this.setState({
			hasError: true,
			loading : false,
		});
	}

	updatePlanet = () => {
		const id = Math.floor(Math.random() * 25) + 2;
		this.swapiService
			.getPlanet(id)
			.then(this.onPlanetLoaded)
			.catch(this.onError);
	}

	render() {

		const { loading, planet, hasError, } = this.state;
		if (hasError) {
			return <ErrorIndicator />;
		}

		const spinner = loading ? <Spinner /> : null,
			content = !loading ? <PlanetView planet={planet} /> : null;

		return (
			<div className="random-planet jumbotron rounded">
				{spinner}
				{content}
			</div>

		);
	}
}
