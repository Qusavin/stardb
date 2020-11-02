import React from 'react';

import {
	withSwapiService,
	withElementDetails,
	compose,
} from '../hoc-helper';
import ItemDetails, { Record, } from '../item-details';


const starshipElements = [
	<Record field="model" label="Model" />,
	<Record field="length" label="Length" />,
	<Record field="costInCredits" label="Cost" />,
];

const mapMethodsToProps = (swapiService) => {
	const { getStarship, getStarshipImage, } = swapiService;
	return {
		getData    : getStarship,
		getImageUrl: getStarshipImage,
	};
};

export default compose(
	withSwapiService(mapMethodsToProps),
	withElementDetails(starshipElements)
)(ItemDetails);