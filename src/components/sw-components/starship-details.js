import React from 'react';

import {
	withSwapiService,
	withElementDetails,
	withDataDetails,
	compose,
} from '../hoc-helper';
import ItemDetails, { Record, } from '../item-details';


const starshipElements = [
	<Record key={1} field="model" label="Model" />,
	<Record key={2} field="length" label="Length" />,
	<Record key={3} field="costInCredits" label="Cost" />,
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
	withElementDetails(starshipElements),
	withDataDetails
)(ItemDetails);