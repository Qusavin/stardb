import React from 'react';

import './item-details.css';


const Record = ({ item, field, label, }) => {
	return (
		<li className="list-group-item">
			<span className="term">{label}</span>
			<span>{item[field]}</span>
		</li>
	);
};

const ItemDetails = (props) => {
	const { image, item, } = props;

	return (
		<div className="item-details card">
			<img className="item-image"
				src={image}
				alt="something wrong"/>

			<div className="card-body">
				<h4>{item.name}</h4>
				<ul key={item.id} className="list-group list-group-flush">
					{
						React.Children.map(props.children, child => {
							return React.cloneElement(child, { item, });
						})
					}
				</ul>
			</div>
		</div>
	);
};

export {
	Record,
};

export default ItemDetails;

