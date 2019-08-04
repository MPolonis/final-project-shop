import React, { Component } from 'react';
import { NavbarMenu } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';
import './MainLayout.scss';

export class MainLayout extends Component {
    render() {
        return (
            <div>
                <NavbarMenu />
                {this.props.children}
                <div>
                    <Footer />
                </div>

            </div>
        )
    }
}

export default MainLayout;