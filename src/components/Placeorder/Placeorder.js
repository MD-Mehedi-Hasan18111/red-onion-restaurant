import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../contexts/useAuth';
import deliverImg from '../../images/delivery-img.png';
import rider from '../../images/Group 1152.png';
import Header from '../Header/Header';

const Placeorder = () => {

    const { delivery } = useAuth();
    const [userInfo, setUserInfo] = delivery;

    console.log(userInfo);

    return (
        <div>
            <Header />
            <div className="container">
                <div className="row" style={{ marginTop: "10px" }}>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.764490244959!2d90.37294121429777!3d23.791399393127286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7762b5f6875%3A0xaefd4e235eb09ba2!2sRed%20Onion%20Restaurent!5e0!3m2!1sbn!2sbd!4v1634304364926!5m2!1sbn!2sbd" width="500" height="400" allowfullscreen="" loading="lazy" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="p-3 w-75" style={{ backgroundColor: "lightgray", borderRadius: "30px" }}>
                            <img width="100px" src={deliverImg} alt="" />
                            <div className="bg-light p-3 w-75 mb-3 rounded-3">
                                <p className="text-danger fw-bold">{userInfo?.name}</p>
                                <h6 className="m-0">Your Location: </h6>
                                <p>{userInfo?.house}, {userInfo?.country}</p>
                                <p className="fw-bold text-danger">Delivery from, Red Onion Restaurent.</p>
                            </div>
                            <div className="bg-light p-3 w-75 my-3 rounded-3 d-flex">
                                <img width="60px" src={rider} alt="" />
                                <div className="ms-3">
                                    <h6 className="m-0">Hamim</h6>
                                    <p>Your Rider</p>
                                </div>
                            </div>
                            <Link to="/home">
                                <button className="btn btn-danger w-50">Back to Home</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Placeorder;