import React from 'react';


const withElementDetails = (elements) => (Wrapped) =>  {
	return (props) => {
		return (
			<Wrapped {...props}>
				{elements}
			</Wrapped>
		);
	};
};

export default withElementDetails;