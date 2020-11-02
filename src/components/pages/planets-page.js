import React, { Component, } from 'react';

import Row from '../row';
import { PlanetList, PlanetDetails, } from '../sw-components';


export default class PeoplePage extends Component {
	state = {
		selectedItem: null,
	}

	onItemSelected = (id) => {
		this.setState({ selectedItem: id, });
	}

	render() {
		const { selectedItem, } = this.state;

		return (
			<Row
				left={<PlanetList onItemSelected={this.onItemSelected}/>}
				right={<PlanetDetails itemId={selectedItem} />}
			/>
		);
	}



}