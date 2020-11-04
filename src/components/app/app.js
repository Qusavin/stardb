import React, { Component, } from 'react';
import { BrowserRouter, Route, Switch, } from 'react-router-dom';

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
import { StarshipDetails, RandomPlanet, } from '../sw-components';
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
				<BrowserRouter>
					<SwapiServiceProvider value={swapiService}>
						<div className="app">
							<Header onServiceChange={this.onServiceChange}/>

							<RandomPlanet />

							<Switch>
								<Route path="/"
									render={() => <h2>Welcome to StarDB</h2>}
									exact />
								<Route path="/people/:id?" component={PeoplePage} />
								<Route path="/planets" component={PlanetPage} />
								<Route path="/starships" exact component={StarshipPage} />
								<Route path="/starships/:id"
									render={({ match, }) => {
										return <StarshipDetails itemId={match.params.id} />;
									}} />
								<Route render={() => <h1>404 Page not found</h1>} />
							</Switch>

						</div>
					</SwapiServiceProvider>
				</BrowserRouter>
			</ErrorBoundry>
		);
	}
}
