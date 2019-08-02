import React, { Component } from 'react';
import './Home.scss';
import data from '../../data/data.json';
import ProductsList from '../ProductsList/ProductsList';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import CarouserlHome from '../CarouselHome/CarouselHome';
import slogan from '../../images/slogan3.jpg';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data,
            direction: 'asc',
            dropdownOpen: false
        };
        this.sortBy = this.sortByPrice.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    sortByPrice(direction) {
        this.setState({
            data: data.sort((a, b) => {
                if (direction === 'asc') {
                    return parseFloat(a['price']) - parseFloat(b['price'])
                } else if (direction === 'desc') {
                    return parseFloat(b['price']) - parseFloat(a['price'])
                } else {
                    return 0;
                }
            })
        });
    }

    sortByName(direction) {
        this.setState({
            data: data.sort((a, b) => {
                if (direction === 'asc') {
                    return a['name'].localeCompare(b['name'])
                } else if (direction === 'desc') {
                    return b['name'].localeCompare(a['name'])
                } else {
                    return 0;
                }
            })
        });
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render() {
        return (
            <div className="home-general">
                <CarouserlHome />
                <div>
                    <div className="header">
                        <h1>Nasze produkty</h1>
                    </div>
                </div>
                <div className="dropdownButton">
                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle caret>
                            Sortuj według...
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem><span onClick={() => this.sortByPrice('asc')}>Cena rosnąco</span></DropdownItem>
                            <DropdownItem><span onClick={() => this.sortByPrice('desc')}>Cena malejąco</span></DropdownItem>
                            <DropdownItem><span onClick={() => this.sortByName('asc')}>Nazwa A-Z</span></DropdownItem>
                            <DropdownItem><span onClick={() => this.sortByName('desc')}>Nazwa Z-A</span></DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div>
                    <ProductsList data={this.state.data} />
                </div>
                <div className="whoWeAre">
                    <div className="header">
                        <h1>O nas</h1>
                        <p>Kim jesteśmy?</p>
                        <div className="slogan">
                            <img className="slogan-photo" src={slogan} alt="slogan"></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} 

export default Home;
