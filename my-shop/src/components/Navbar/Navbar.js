import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';
import logo from '../../images/DaRoots.png';

export const Navbar = props => {
    return (
        <div>
            <header className="menu">
                <nav className="navbar">
                    <ul className="nav-top">
                        <li><img className="logo" src={logo} alt="logo" /></li>
                        <li><NavLink exact to="/home" className="active" activeClassName="active">Home</NavLink></li>
                        <li><NavLink exact to="/FAQ" activeClassName="active">FAQ</NavLink></li>
                        <li><NavLink exact to="/regulamin" activeClassName="active">Regulamin</NavLink></li>
                        <li><NavLink exact to="/kontakt" activeClassName="active">Kontakt</NavLink></li>
                    </ul>
                </nav>
            </header>
        </div>
        // <div>
        //     <nav>
        //         <div><img className='logo' src={logo} alt='logo'/></div>
        //         <div>
        //             <NavLink exact to='/home' activeClassName='active'>
        //                 Home
        //             </NavLink>
        //             <NavLink exact to='/FAQ' activeClassName='active'>
        //                 FAQ
        //             </NavLink>
        //             <NavLink exact to='/regulamin' activeClassName='active'>
        //                 Regulamin
        //             </NavLink>
        //             <NavLink exact to='/kontakt' activeClassName='active'>
        //                 Kontakt
        //             </NavLink>
        //         </div>
        //     </nav>
        // </div>
    )
   
}