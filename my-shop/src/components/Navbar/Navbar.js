import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import MediaQuery from "react-responsive";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import './Navbar.scss';
import logo from '../../images/DaRoots.png';

export class NavbarMenu extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <MediaQuery query="(max-width: 760px)">
                    <div>
                        <Navbar color="light" light expand="md">
                            <NavbarBrand href="/"><img className="logo" src={logo} alt="logo" /></NavbarBrand>
                            <NavbarToggler onClick={this.toggle} />
                            <Collapse isOpen={this.state.isOpen} navbar>
                                <Nav className="ml-auto" navbar>
                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownItem><NavLink exact to="/home" activeClassName="active">Home</NavLink></DropdownItem>
                                        <DropdownItem><NavLink exact to="/FAQ" activeClassName="active">FAQ</NavLink></DropdownItem>
                                        <DropdownItem><NavLink exact to="/regulamin" activeClassName="active">Regulamin</NavLink></DropdownItem>
                                        <DropdownItem><NavLink exact to="/kontakt" activeClassName="active">Kontakt</NavLink></DropdownItem>
                                        <DropdownItem><NavLink exact to="/koszyk" activeClassName="active">Koszyk</NavLink></DropdownItem>
                                    </UncontrolledDropdown>
                                </Nav>
                            </Collapse>
                        </Navbar>
                    </div>
                </MediaQuery>
                <MediaQuery query="(min-width: 761px)">
                    <header className="menu">
                        <nav className="navbar">
                            <ul className="nav-top">
                                <li><img className="logo" src={logo} alt="logo" /></li>
                                <li><NavLink exact to="/home" activeClassName="active">Home</NavLink></li>
                                <li><NavLink exact to="/FAQ" activeClassName="active">FAQ</NavLink></li>
                                <li><NavLink exact to="/regulamin" activeClassName="active">Regulamin</NavLink></li>
                                <li><NavLink exact to="/kontakt" activeClassName="active">Kontakt</NavLink></li>
                                <li><NavLink exact to="/koszyk" activeClassName="active">Koszyk</NavLink></li>
                            </ul>
                        </nav>
                    </header>
                </MediaQuery>
            </div>
        )
    }
   
}