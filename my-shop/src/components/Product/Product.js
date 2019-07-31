import React from 'react';
import { Link } from 'react-router-dom';
import './Product.scss';

const Product = props => {

	return (
		<Link
			to={`/product/${props.id}`}
			key={`/product-${props.id}`}
			id={`product-${props.id}`}
			{...props}
			>
				<div className="product-wrapper" style={{
					backgroundImage: `url(${props.photo})`,
					backgroundRepeat: `no-repeat`,
					backgroundSize: `cover`,
					backgroundPosition: `center`
				}}>
				</div>
				<div className="product-info-wrapper">
					<span className="product-name">Nazwa produktu: {props.name}</span>
					{/* <span className="product-description">Opis: {props.description}</span> */}
					<span className="product-price">{props.price} zł</span>
				</div>
			</Link>
	);
}

export default Product;