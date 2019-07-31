import React, { Component } from 'react';
import data from '../../data/data.json';
import './ProductItem.scss';

class ProductItem extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        const found = data.find(x => x.id === parseFloat(this.props.id));
        return (
            <div className="individual-project">
                <span><img className="product-photo" src={found.photo} alt="products"></img></span>
                <span className="product-name">Nazwa produktu: {found.name}</span>
                <span className="product-description">Opis: {found.description}</span>
                <span className="product-price">{found.price} zł</span>
            </div>
        )
    }
}

export default ProductItem;