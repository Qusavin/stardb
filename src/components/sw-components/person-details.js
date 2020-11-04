import React from 'react';

import {
	withSwapiService,
	withElementDetails,
	withDataDetails,
	compose,
} from '../hoc-helper';
import ItemDetails, { Record, } from '../item-details';


const personElements = [
	<Record key={1} field="gender" label="Gender" />,
	<Record key={2} field="eyeColor" label="Eye Color" />,
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
	withElementDetails(personElements),
	withDataDetails
)(ItemDetails);
