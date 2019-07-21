import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';
import logo from '../../images/DaRoots.png';

export const Navbar = props => {
    return (
        <div>
            <nav>
                <div><img className='logo' src={logo} alt='logo'/></div>
                <div>
                    <NavLink exact to='/home' activeClassName='active'>
                        Home
                    </NavLink>
                    <NavLink exact to='/FAQ' activeClassName='active'>
                        FAQ
                    </NavLink>
                    <NavLink exact to='/regulamin' activeClassName='active'>
                        Regulamin
                    </NavLink>
                    <NavLink exact to='/kontakt' activeClassName='active'>
                        Kontakt
                    </NavLink>
                </div>
            </nav>
        </div>
    )
   
}