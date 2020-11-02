import React from 'react';

import {
	withSwapiService,
	withElementDetails,
	compose,
} from '../hoc-helper';
import ItemDetails, { Record, } from '../item-details';


const personElements = [
	<Record field="gender" label="Gender" />,
	<Record field="eyeColor" label="Eye Color" />,
];

const mapMethodsToProps = (swapiService) => {
	const { getPerson, getPersonImage, } = swapiService;
	return {
		getData    : getPerson,
		getImageUrl: getPersonImage,
	};
};

export default compose(
	withSwapiService(mapMethodsToProps),
	withElementDetails(personElements)
)(ItemDetails);
