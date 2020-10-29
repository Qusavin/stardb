import React, { Component, } from 'react';

import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry';

import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import Header from '../header';
import PeoplePage from '../people-page';
import RandomPlanet from '../random-planet';

import './app.css';


export default class App extends Component {
	swapiService = new SwapiService();

	state = {
		showRandomPlanet: true,
		hasError        : false,
	}

	componentDidCatch() {
		this.setState({ hasError: true, });
	}

	toggleRandomPlanet = () => {
		this.setState(({ showRandomPlanet, }) => {
			return {
				showRandomPlanet: !showRandomPlanet,
			};
		});
	}

	render() {
		const { showRandomPlanet, hasError, } = this.state;

		if (hasError) {
			return <ErrorIndicator />;
		}

		const planet = showRandomPlanet ? <RandomPlanet /> : null;

		return (
			<ErrorBoundry>
				<div className="app">
					<Header />

					{planet}

					<div className='row mb2 button-row'>
						<button
							className="btn btn-warning btn-lg"
							onClick={this.toggleRandomPlanet}>
							Toggle Random Planet
						</button>

						<ErrorButton />
					</div>

					<PeoplePage />
				</div>
			</ErrorBoundry>
		);
	}
}
