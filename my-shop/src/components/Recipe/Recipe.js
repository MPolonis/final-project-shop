import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Recipe.scss';

class Recipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    componentWillUnmount() {
        if (this.refs.shipping.checked)
            this.props.substractShipping()
    }

    handleChecked = (e) => {
        if (e.target.checked) {
            this.props.addShipping();
        }
        else {
            this.props.substractShipping();
        }
    }

    render() {

        return (
            <div className="recipe-container">
                <div className="collection">
                    <input className="discount" type="text" placeholder="Discount Code"></input>
                    <li className="collection-item">
                        <label>
                            <input type="checkbox" ref="shipping" onChange={this.handleChecked} />
                            <span>Dostawa kurierem (+ 15zł)</span>
                        </label>
                    </li>
                </div>
                <div className="recipe-summary"><b>Koszt całego zamówienia: {this.props.total} zł</b></div>
                <div className="checkout">
                    <div>
                        <Button className="btn" color="danger" onClick={this.toggle}>Zamów</Button>
                        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                            <ModalHeader toggle={this.toggle}>Twoje zamówienie zostało złożone</ModalHeader>
                            <ModalBody>
                                <div className="recipe-summary"><b>Całkowity koszt Twoich zakupów: {this.props.total} zł</b></div>
                            </ModalBody>
                            <ModalFooter>
                
                                <Button color="secondary" onClick={this.toggle}>Wyjdź</Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addShipping: () => { dispatch({ type: 'ADD_SHIPPING' }) },
        substractShipping: () => { dispatch({ type: 'SUB_SHIPPING' }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipe)