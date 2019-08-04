import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions'
import data from '../../data/data.json';
import { Button } from 'reactstrap';
import './ProductItem.scss';

class ProductItem extends Component {

    handleClick = (id) => {
        this.props.addToCart(id);
    }

    render() {
        const found = data.find(x => x.id === parseFloat(this.props.id));
        return (
            <div className="individual-project">
                <span><img className="product-photo" src={found.photo} alt="products"></img></span>
                <span className="product-name">Nazwa produktu: {found.name}</span>
                <span className="product-description">Opis: {found.description}</span>
                <span className="product-price">{found.price} zł</span>
                <Button onClick={() => this.handleClick(found.id)}>Dodaj do koszyka</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
