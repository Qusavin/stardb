import {
	withData,
	withSwapiService,
	withChildFunction,
	compose,
} from '../hoc-helper';
import ItemList from '../item-list';

import { renderName, } from './help-functions';


const mapMethodsToProps = (swapiService) => {
	const { getAllPlanets, } = swapiService;
	return {
		getData: getAllPlanets,
	};
};

export default compose(
	withSwapiService(mapMethodsToProps),
	withData,
	withChildFunction(renderName)
)(ItemList);