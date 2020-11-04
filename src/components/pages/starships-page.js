import React from 'react';
import { withRouter, } from 'react-router-dom';

import { StarshipList, } from '../sw-components';


const PeoplePage = ({ history, }) => {
	return (
		<StarshipList onItemSelected={history.push}/>
	);

};

export default withRouter(PeoplePage);