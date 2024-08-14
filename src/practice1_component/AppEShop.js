import React, { Component } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Home from './Home';
import Selection from './Selection';
import Footer from './Footer';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';




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