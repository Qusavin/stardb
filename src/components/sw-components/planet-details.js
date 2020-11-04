import React from 'react';

import {
	withSwapiService,
	withElementDetails,
	withDataDetails,
	compose,
} from '../hoc-helper';
import ItemDetails, { Record, } from '../item-details';


const planetElements = [
	<Record key={1} field="population" label="Population" />,
	<Record key={2} field="rotationPeriod" label="Rotation Period" />,
	<Record key={3} field="diameter" label="Diameter" />,
];

const mapMethodsToProps = (swapiService) => {
	const { getPlanet, getPlanetImage, } = swapiService;
	return {
		getData    : getPlanet,
		getImageUrl: getPlanetImage,
	};
};

export default compose(
	withSwapiService(mapMethodsToProps),
	withElementDetails(planetElements),
	withDataDetails
)(ItemDetails);