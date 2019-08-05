import React from 'react';
import { NavLink } from 'react-router-dom';
import MediaQuery from "react-responsive";
import './Footer.scss';

export const Footer = props => {
    return (
        <div>  
            <MediaQuery query="(max-width: 760px)">
                <footer className="footer-on-mobile">
                    <h1 className="footer-mobile-inscription">© Copyright 2019 Marcin Polonis</h1>
                </footer>
            </MediaQuery>
            <MediaQuery query="(min-width: 761px)">
                <footer className="footer">
                    <ul className="nav-bottom">
                        <li><h3 className="rights">© Copyright 2019 Marcin Polonis</h3></li>
                        <li><NavLink exact to="/home" className="active" activeClassName="active">Home</NavLink></li>
                        <li><NavLink exact to="/FAQ" activeClassName="active">FAQ</NavLink></li>
                        <li><NavLink exact to="/regulamin" activeClassName="active">Regulamin</NavLink></li>
                        <li><NavLink exact to="/kontakt" activeClassName="active">Kontakt</NavLink></li>
                    </ul>
                </footer>
            </MediaQuery>
        </div>
    )
};