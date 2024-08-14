import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/appEshop.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'font-awesome/css/font-awesome.min.css';
import images from '../pictures/images.js';


class Footer extends Component {
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
                <>
                    <footer id="footer" className="section section-grey">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3 col-sm-6 col-xs-6">
                                    <div className="footer">
                                        <div className="footer-logo">
                                            <a className="logo" href="#">
                                                <img src={images.logo} alt="logo" style={nbStyle}/>
                                            </a>
                                        </div>

                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna
                                        </p>
                                        <ul className="footer-social">
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-facebook" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-instagram" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-google-plus" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-pinterest" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-xs-6">
                                    <div className="footer">
                                        <h3 className="footer-header">My Account</h3>
                                        <ul className="list-links">
                                            <li>
                                                <a href="#">My Account</a>
                                            </li>
                                            <li>
                                                <a href="#">My Wishlist</a>
                                            </li>
                                            <li>
                                                <a href="#">Compare</a>
                                            </li>
                                            <li>
                                                <a href="#">Checkout</a>
                                            </li>
                                            <li>
                                                <a href="#">Login</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="clearfix visible-sm visible-xs" />
                                <div className="col-md-3 col-sm-6 col-xs-6">
                                    <div className="footer">
                                        <h3 className="footer-header">Customer Service</h3>
                                        <ul className="list-links">
                                            <li>
                                                <a href="#">About Us</a>
                                            </li>
                                            <li>
                                                <a href="#">Shiping &amp; Return</a>
                                            </li>
                                            <li>
                                                <a href="#">Shiping Guide</a>
                                            </li>
                                            <li>
                                                <a href="#">FAQ</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* /footer widget */}
                                {/* footer subscribe */}
                                <div className="col-md-3 col-sm-6 col-xs-6">
                                    <div className="footer">
                                        <h3 className="footer-header">Stay Connected</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                            eiusmod tempor.
                                        </p>
                                        <form>
                                            <div className="form-group">
                                                <input className="input" placeholder="Enter Email Address" />
                                            </div>
                                            <button className="primary-btn">Join Newslatter</button>
                                        </form>
                                    </div>
                                </div>
                                {/* /footer subscribe */}
                            </div>
                            {/* /row */}
                            <hr />
                            {/* row */}
                            <div className="row">
                                <div className="col-md-8 col-md-offset-2 text-center">
                                    {/* footer copyright */}
                                    <div className="footer-copyright">
                                        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                        Copyright © All rights reserved | This template is made with{" "}
                                        <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
                                        <a href="https://colorlib.com" target="_blank">
                                            Colorlib
                                        </a>
                                        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                    </div>
                                    {/* /footer copyright */}
                                </div>
                            </div>
                            {/* /row */}
                        </div>
                        {/* /container */}
                    </footer>
                    {/* /FOOTER */}
                </>

            </div>
        );
    }
}

export default Footer;