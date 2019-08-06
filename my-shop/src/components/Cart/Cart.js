import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem, addQuantity, subtractQuantity } from '../actions/cartActions';
import MediaQuery from "react-responsive";
import Recipe from '../Recipe/Recipe';
import './Cart.scss';

class Cart extends Component {

    
    handleRemove = (id) => {
        this.props.removeItem(id);
    }
    
    handleAddQuantity = (id) => {
        this.props.addQuantity(id);
    }
    
    handleSubtractQuantity = (id) => {
        this.props.subtractQuantity(id);
    }
    render() {

        let addedItems = this.props.items.length ?
            (
                this.props.items.map(item => {
                    return (
                        <div>
                            <MediaQuery query="(max-width: 760px)">
                                <div className="collection-item" key={item.id}>
                                    <div className="product-img">
                                        <img className="item-img" src={item.photo} alt="" />
                                    </div>

                                    <div className="item-desc">
                                        <span className="title-mobile">{item.name}</span>
                                        <p className="item-desc-mobile"><b>Cena: {item.price} zł</b></p>
                                        <p className="item-desc-mobile">
                                            <b>Ilość: {item.quantity}</b>
                                        </p>
                                        <div className="add-remove item-desc">
                                            <Link to="/koszyk"><i className="material-icons" onClick={() => { this.handleAddQuantity(item.id) }}>arrow_drop_up</i></Link>
                                            <Link to="/koszyk"><i className="material-icons" onClick={() => { this.handleSubtractQuantity(item.id) }}>arrow_drop_down</i></Link>
                                        </div>
                                        <span><i className="fas fa-trash-alt trash-remove-mobile" onClick={() => { this.handleRemove(item.id) }}></i></span>
                                    </div>

                                </div>
                            </MediaQuery>
                            <MediaQuery query="(min-width: 761px)">
                                <div className="collection-item" key={item.id}>
                                    <div className="product-img">
                                        <img className="item-img" src={item.photo} alt="" />
                                    </div>

                                    <div className="item-desc">
                                        <span className="title">{item.name}</span>
                                        <p className="item-desc"><b>Cena: {item.price} zł</b></p>
                                        <p className="item-desc">
                                            <b>Ilość: {item.quantity}</b>
                                        </p>
                                        <div className="add-remove item-desc">
                                            <Link to="/koszyk"><i className="material-icons" onClick={() => { this.handleAddQuantity(item.id) }}>arrow_drop_up</i></Link>
                                            <Link to="/koszyk"><i className="material-icons" onClick={() => { this.handleSubtractQuantity(item.id) }}>arrow_drop_down</i></Link>
                                        </div>
                                        <span><i className="fas fa-trash-alt trash-remove" onClick={() => { this.handleRemove(item.id) }}></i></span>
                                    </div>

                                </div>
                            </MediaQuery>
                        </div>
                    )
                })
            ) :
            (
                <p className="empty-cart">Koszyk jest pusty</p>
            )
        return (
            <div className="cart-container">
                <div className="cart">
                    <h1 className="cart-order">Twoje zamówienie:</h1>
                    <div className="collection">
                        {addedItems}
                    </div>
                </div>
                <Recipe />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        items: state.addedItems,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => { dispatch(removeItem(id)) },
        addQuantity: (id) => { dispatch(addQuantity(id)) },
        subtractQuantity: (id) => { dispatch(subtractQuantity(id)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)