import React from 'react';

import {
	withSwapiService,
	withElementDetails,
	compose,
} from '../hoc-helper';
import ItemDetails, { Record, } from '../item-details';


const planetElements = [
	<Record field="population" label="Population" />,
	<Record field="rotationPeriod" label="Rotation Period" />,
	<Record field="diameter" label="Diameter" />,
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
	withElementDetails(planetElements)
)(ItemDetails);