import React, { Component, } from 'react';

import Spinner from '../spinner';


const withDataDetails = (View) => {
	return class extends Component {
		state = {
			item   : null,
			image  : null,
			loading: false,
		}

		componentDidMount() {
			this.updateItem();
		}

		componentDidUpdate(prevProps) {
			if (prevProps.itemId !== this.props.itemId ||
				prevProps.getData !== this.props.getData ||
				prevProps.itemId !== this.props.itemId) {
				this.updateItem();
			}
		}

		updateItem() {
			const { itemId, getData, getImageUrl, } = this.props;

			if (!itemId) {
				return;
			}
			this.setState({ loading: true, });

			getData(itemId)
				.then(item => {
					this.setState({
						item, image: getImageUrl(item), loading: false,
					});
				})
				.catch(e => {});
		}

		render() {
			const { item, image, loading, } = this.state;

			if (!item) {
				return <span>Select a person from a list</span>;
			}

			if (loading) {
				return <Spinner />;
			}

			return (
				<View {...this.props} item={item} image={image} />
			);
		}
	};
};

export default withDataDetails;
