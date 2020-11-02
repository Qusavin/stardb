import React from 'react';


const Record = ({ field, label, }) => {
	return (
		<li key={field} className="list-group-item">
			<span className="term">{label}</span>
			<span>{field}</span>
		</li>
	);
};

const PlanetView = ({ planet, image, }) => {
	const { population, rotationPeriod, diameter, name, } = planet;

	return (
		<React.Fragment>
			<img className="planet-image"
				src={image}
				alt="something was wrong"
			/>

			<div>
				<h4>{name}</h4>
				<ul className="list-group list-group-flush">
					<Record label="Population" field={population}/>
					<Record label="Rotation Period" field={rotationPeriod}/>
					<Record label="Diameter" field={diameter}/>
				</ul>
			</div>
		</React.Fragment>
	);
};

export default PlanetView;