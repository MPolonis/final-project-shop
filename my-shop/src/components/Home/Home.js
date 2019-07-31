import React, { Component } from 'react';
import './Home.scss';
import data from '../../data/data.json';
import ProductsList from '../ProductsList/ProductsList';
import { Button } from 'react-bootstrap';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data
        };
        this.sortBy = this.sortByPrice.bind(this);
    }

    sortByPrice(direction) {
        this.setState({
            data: data.sort((a, b) => {
                if (direction === "asc") {
                    return parseFloat(a['price']) - parseFloat(b['price'])
                } else if (direction === 'desc') {
                    return parseFloat(b['price']) - parseFloat(a['price'])
                } else {
                    return 0;
                }
            })
        });
    }

    render() {
        return (
            <div className="home-general">
                <div className="home">
                </div>
                <div className="about">
                    <div className="about-header">
                        <h1>O nas</h1>
                        <p>Kim jesteśmy?</p>
                    </div>
                    <div className="row">
                        <div className="row col-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="col-2 col-lg-2"></div>
                            <div className="col-10 col-lg-10 col-md-12 col-sm-12">
                                <p className="about-paragraph">DaRoots to marka, która narodziła się z pasji do gór i środowiska. Naszym celem jest projektowanie i tworzenie sprzętu wspinaczkowego, który pozwala na przekraczanie granic niemożliwego. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum cursus, justo in posuere efficitur, nisl mi auctor leo, id finibus felis felis eu leo. Pellentesque aliquet ultrices magna non pharetra. Aenean orci lectus, convallis vel ligula ut, blandit viverra eros. Nam euismod justo ut tortor elementum aliquam. Nam sollicitudin ante at dignissim ullamcorper. Proin ac faucibus velit, eget fermentum ligula. Proin pellentesque accumsan erat in posuere. Pellentesque ut quam pulvinar orci varius placerat et quis felis. Praesent ullamcorper dignissim tellus, et aliquam enim accumsan at.
                            </p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-6 col-md-12 col-sm-12">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/8LnxOYGxaPo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
                <div>
                    <Button onClick={() => this.sortByPrice('asc')}>Cena rosnąco</Button>
                    <Button onClick={() => this.sortByPrice('desc')}>Cena malejąco</Button>
                </div>
                <div>
                    <ProductsList data={this.state.data} />
                </div>
            </div>
        )
    }
} 

export default Home;
