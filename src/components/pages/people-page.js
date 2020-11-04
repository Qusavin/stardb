import React from 'react';
import { withRouter, } from 'react-router-dom';

import Row from '../row';
import { PersonList, PersonDetails, } from '../sw-components';


const PeoplePage = ({ match, history, }) => {
	return (
		<Row
			left={<PersonList onItemSelected={history.push} />}
			right={<PersonDetails itemId={match.params.id} />}
		/>
	);
};

export default withRouter(PeoplePage);