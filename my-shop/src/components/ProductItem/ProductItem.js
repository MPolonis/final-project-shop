import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import MediaQuery from "react-responsive";
import data from '../../data/data.json';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'reactstrap';
import './ProductItem.scss';

class ProductItem extends Component {
    constructor(props, context) {
        super(props, context);

        this.showModal = this.showModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

        this.state = {
            show: false,
        };
    }

    closeModal() {
        this.setState({ show: false });
    }

    showModal() {
        this.setState({ show: true });
    }

    handleClick = (id) => {
        this.showModal();
        this.props.addToCart(id);
    }

   

    render() {
        const found = data.find(x => x.id === parseFloat(this.props.id));
        return (
            <div>
                <MediaQuery query="(max-width: 760px)">
                    <div className="individual-project">
                        <span><img className="product-photo-mobile" src={found.photo} alt="products"></img></span>
                        <span className="product-name">Nazwa produktu: {found.name}</span>
                        <span className="product-description">Opis: {found.description}</span>
                        <span className="product-price">{found.price} zł</span>
                        <Button onClick={() => this.handleClick(found.id)}>Dodaj do koszyka</Button>
                        <Modal show={this.state.show} onHide={this.closeModal}>
                            <Modal.Header closeButton>
                                <Modal.Title>Dodano produkt do koszyka</Modal.Title>
                            </Modal.Header>
                        </Modal>
                    </div>
                </MediaQuery>
                <MediaQuery query="(min-width: 761px)">
                    <div className="individual-project">
                        <span><img className="product-photo" src={found.photo} alt="products"></img></span>
                        <span className="product-name">Nazwa produktu: {found.name}</span>
                        <span className="product-description">Opis: {found.description}</span>
                        <span className="product-price">{found.price} zł</span>
                        <Button onClick={() => this.handleClick(found.id)}>Dodaj do koszyka</Button>
                        <Modal show={this.state.show} onHide={this.closeModal}>
                            <Modal.Header closeButton>
                                <Modal.Title>Dodano produkt do koszyka</Modal.Title>
                            </Modal.Header>
                        </Modal>
                        
                    </div>
                </MediaQuery>
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
