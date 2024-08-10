import React, { Component } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Home from './Home';
import Selection from './Selection';
import Footer from './Footer';

class AppEShop extends Component {
    render() {
        return (
            <div>
                <Header />
                <Navigation/>
                <Home />
                <Selection/>
                <Footer/>
            </div>
        );
    }
}

export default AppEShop;