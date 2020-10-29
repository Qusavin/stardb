import React, { Component, } from 'react';

import SwapiService from '../../services/swapi-service';

import ErrorBoundry from '../error-boundry';
import ItemDetails, { Record, } from '../item-details';
import ItemList from '../item-list';
import Row from '../row';


export default class PeoplePage extends Component {
	swapiService = new SwapiService();

	state = {
		selectedPerson: 3,
	}

	onPersonSelected = id => {
		this.setState({
			selectedPerson: id,
		});
	}

	render() {
		const {
				getPerson,
				getPersonImage,
			} = this.swapiService,
			{ selectedPerson, } = this.state,
			itemList = (
				<ItemList
					onItemSelected={this.onPersonSelected}
					getData={this.swapiService.getAllPeople}>
					{i => `${i.name} (${i.birthYear})`}
				</ItemList>
			),
			itemDetails = (
				<ItemDetails itemId={selectedPerson}
					getData={getPerson}
					getImageUrl={getPersonImage}>

					<Record field="gender" label="Gender" />
					<Record field="eyeColor" label="Eye Color" />

				</ItemDetails>
			);

		return (
			<ErrorBoundry>
				<Row left={itemList} right={itemDetails} />
			</ErrorBoundry>
		);
	}
}
