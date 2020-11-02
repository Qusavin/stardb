import React from 'react';

import withDataDetails from './with-data-details';



const withElementDetails = (elements) => (Wrapped) =>  {
	const Details = withDataDetails(Wrapped);
	return (props) => {
		return (
			<Details {...props}>
				{elements}
			</Details>
		);
	};
};

export default withElementDetails;