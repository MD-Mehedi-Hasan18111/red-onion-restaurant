import React from 'react';
import './Footer.css';
import logo from '../../images/logo.png';
import paymentWay from '../../images/payment.jpg';

const Footer = () => {
    return (
        <div className="bg-dark">
            <div className="container p-4">
                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-4">
                    <div className="col">
                        <img width="150px" src={logo} alt="" />
                    </div>
                    <div className="col text-light mt-3">
                        <small className="m-0">About onion food</small><br />
                        <small className="m-0">Read our blog</small><br />
                        <small className="m-0">Sign up to driver</small><br />
                        <small className="m-0">Add your restaurant</small><br />
                    </div>
                    <div className="col text-light mt-3">
                        <small className="m-0">Get help</small><br />
                        <small className="m-0">Read FAQ's</small><br />
                        <small className="m-0">View all clients</small><br />
                        <small className="m-0">Restaurant near me</small><br />
                    </div>
                </div>
                <div className="row d-flex align-items-center">
                    <div className="col-lg-8 col-md-6 col-sm-12">
                        <small className="text-light">copyright &copy; reserved onion Food</small>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="text-right">
                            <small>Payment by:</small>
                            <img width="300px" src={paymentWay} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Footer;