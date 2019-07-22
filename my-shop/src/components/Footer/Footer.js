import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.scss';

export const Footer = props => {
    return (
        <div>  
            <nav className="footer">
                <ul className="nav-bottom">
                    <li><h3 className="rights">All Rights Reserved</h3></li>
                    <li><NavLink exact to="/home" className="active" activeClassName="active">Home</NavLink></li>
                    <li><NavLink exact to="/FAQ" activeClassName="active">FAQ</NavLink></li>
                    <li><NavLink exact to="/regulamin" activeClassName="active">Regulamin</NavLink></li>
                    <li><NavLink exact to="/kontakt" activeClassName="active">Kontakt</NavLink></li>
                </ul>
            </nav>
        </div>
    )
};