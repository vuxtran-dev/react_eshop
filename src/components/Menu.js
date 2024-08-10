import React, { Component } from 'react';
import '../css/menu.css';

class Menu extends Component {
    render() {
        return (
            <div>
                <ul className="menu">
                    <li>Home</li>
                    <li>Services</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        );
    }
}

export default Menu;