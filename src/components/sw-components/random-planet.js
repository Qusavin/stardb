import {
	withSwapiService,
	withDataRandomPlanet,
	compose,
} from '../hoc-helper';
import RandomPlanet from '../random-planet';


const mapMethodsToProps = (swapiService) => {
	const { getPlanet, getPlanetImage, } = swapiService;
	return {
		getPlanet,
		getPlanetImage,
	};
};

export default compose(
	withSwapiService(mapMethodsToProps),
	withDataRandomPlanet
)(RandomPlanet);
