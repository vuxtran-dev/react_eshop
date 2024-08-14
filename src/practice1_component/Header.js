import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/appEshop.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'font-awesome/css/font-awesome.min.css';
import images from '../pictures/images.js';


class Header extends Component {
    render() {
        const nbStyle = {
            logo: {
                width: '100px',
                height: 'auto',
                borderRadius: '10px',
            }
        };
        return (
            <div>

                <div id="top-header">
                    <div className="container">
                        <div className="pull-left">
                            <span>Welcome to E-shop!</span>
                        </div>
                        <div className="pull-right">
                            <ul className="header-top-links">
                                <li>
                                    <a href="#">Store</a>
                                </li>
                                <li>
                                    <a href="#">Newsletter</a>
                                </li>
                                <li>
                                    <a href="#">FAQ</a>
                                </li>
                                <li className="dropdown default-dropdown">
                                    <a
                                        className="dropdown-toggle"
                                        data-toggle="dropdown"
                                        aria-expanded="true"
                                    >
                                        ENG <i className="fa fa-caret-down" />
                                    </a>
                                    <ul className="custom-menu">
                                        <li>
                                            <a href="#">English (ENG)</a>
                                        </li>
                                        <li>
                                            <a href="#">Russian (Ru)</a>
                                        </li>
                                        <li>
                                            <a href="#">French (FR)</a>
                                        </li>
                                        <li>
                                            <a href="#">Spanish (Es)</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown default-dropdown">
                                    <a
                                        className="dropdown-toggle"
                                        data-toggle="dropdown"
                                        aria-expanded="true"
                                    >
                                        USD <i className="fa fa-caret-down" />
                                    </a>
                                    <ul className="custom-menu">
                                        <li>
                                            <a href="#">USD ($)</a>
                                        </li>
                                        <li>
                                            <a href="#">EUR (€)</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div id="header">
                    <div className="container">
                        <div className="pull-left">

                            <div className="header-logo">
                                <a className="logo" href="#">
                                    {/* <img src={images['logo.png']} style={nbStyle.logo} alt="" /> */}
                                    </a>
                            </div>

                            <div className="header-search">
                                <form>
                                    <input
                                        className="input search-input"
                                        type="text"
                                        placeholder="Enter your keyword"
                                    />
                                    <select className="input search-categories">
                                        <option value={0}>All Categories</option>
                                        <option value={1}>Category 01</option>
                                        <option value={1}>Category 02</option>
                                    </select>
                                    <button className="search-btn">
                                        <i className="fa fa-search" />
                                    </button>
                                </form>
                            </div>

                        </div>
                        <div className="pull-right">
                            <ul className="header-btns">

                                <li className="header-account dropdown default-dropdown">
                                    <div
                                        className="dropdown-toggle"
                                        role="button"
                                        data-toggle="dropdown"
                                        aria-expanded="true"
                                    >
                                        <div className="header-btns-icon">
                                            <i className="fa fa-user-o" />
                                        </div>
                                        <strong className="text-uppercase">
                                            My Account <i className="fa fa-caret-down" />
                                        </strong>
                                    </div>
                                    <a href="#" className="text-uppercase">
                                        Login
                                    </a>{" "}
                                    /{" "}
                                    <a href="#" className="text-uppercase">
                                        Join
                                    </a>
                                    <ul className="custom-menu">
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-user-o" /> My Account
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-heart-o" /> My Wishlist
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-exchange" /> Compare
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-check" /> Checkout
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-unlock-alt" /> Login
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-user-plus" /> Create An Account
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="header-cart dropdown default-dropdown">
                                    <a
                                        className="dropdown-toggle"
                                        data-toggle="dropdown"
                                        aria-expanded="true"
                                    >
                                        <div className="header-btns-icon">
                                            <i className="fa fa-shopping-cart" />
                                            <span className="qty">3</span>
                                        </div>
                                        <strong className="text-uppercase">My Cart:</strong>
                                        <br />
                                        <span>35.20$</span>
                                    </a>
                                    <div className="custom-menu">
                                        <div id="shopping-cart">
                                            <div className="shopping-cart-list">
                                                <div className="product product-widget">
                                                    <div className="product-thumb">
                                                        <img src={images.thumb01} alt="product" style={nbStyle} />
                                                    </div>
                                                    <div className="product-body">
                                                        <h3 className="product-price">
                                                            $32.50 <span className="qty">x3</span>
                                                        </h3>
                                                        <h2 className="product-name">
                                                            <a href="#">Product Name Goes Here</a>
                                                        </h2>
                                                    </div>
                                                    <button className="cancel-btn">
                                                        <i className="fa fa-trash" />
                                                    </button>
                                                </div>
                                                <div className="product product-widget">
                                                    <div className="product-thumb">
                                                        <img src={images.thumb01} alt="product" style={nbStyle} />
                                                    </div>
                                                    <div className="product-body">
                                                        <h3 className="product-price">
                                                            $32.50 <span className="qty">x3</span>
                                                        </h3>
                                                        <h2 className="product-name">
                                                            <a href="#">Product Name Goes Here</a>
                                                        </h2>
                                                    </div>
                                                    <button className="cancel-btn">
                                                        <i className="fa fa-trash" />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="shopping-cart-btns">
                                                <button className="main-btn">View Cart</button>
                                                <button className="primary-btn">
                                                    Checkout <i className="fa fa-arrow-circle-right" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="nav-toggle">
                                    <button className="nav-toggle-btn main-btn icon-btn">
                                        <i className="fa fa-bars" />
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>



            </div>
        );
    }
}

export default Header;