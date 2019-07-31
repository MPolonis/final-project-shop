import React, { Component } from "react";
import Product from '../Product/Product';
import './ProductsList.scss';

class ProductsList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="products">
                {this.props.data
                    .map(a => <Product key={`product-${a.id}`} {...a} /> )}
            </div>
        )
    }
}

export default ProductsList;