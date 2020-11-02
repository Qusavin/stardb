import React, { Component, } from 'react';

import DummySwapiService from '../../services/dummy-swapi-service';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry';

import ErrorIndicator from '../error-indicator';
import Header from '../header';
import {
	PeoplePage,
	PlanetPage,
	StarshipPage,
} from '../pages';
import RandomPlanet from '../random-planet';
import { SwapiServiceProvider, } from '../swapi-service-context';

import './app.css';


export default class App extends Component {
	state = {
		hasError    : false,
		swapiService: new SwapiService(),
	}

	componentDidCatch() {
		this.setState({ hasError: true, });
	}

	onServiceChange = () => {
		this.setState(({ swapiService, }) => {
			const Service = swapiService instanceof SwapiService
				? DummySwapiService
				: SwapiService;

			console.log('Switch on ', Service);

			return {
				swapiService: new Service(),
			};
		});
	}

	render() {
		const {
			hasError,
			swapiService,
		} = this.state;

		if (hasError) {
			return <ErrorIndicator />;
		}

		return (
			<ErrorBoundry>
				<SwapiServiceProvider value={swapiService}>
					<div className="app">
						<Header onServiceChange={this.onServiceChange}/>

						<RandomPlanet />

						<PeoplePage />
						<PlanetPage />
						<StarshipPage />

					</div>
				</SwapiServiceProvider>
			</ErrorBoundry>
		);
	}
}
