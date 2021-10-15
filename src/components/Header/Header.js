import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import useAuth from '../../contexts/useAuth';
import { Link } from 'react-router-dom';

const Header = () => {

    const styleProfile = {
        backgroundColor: "red",
        color: '#fff',
        height: '140px',
        width: '140px',
        borderRadius: '50%',
        margin: '20px',
        padding: '10px'
    }

    const { carts } = useAuth();
    const [cart, setCart] = carts;

    const { firebases } = useAuth();
    const [user, logOut] = firebases;

    // console.log(user);

    return (
        <div className="container py-3">
            <div className="row g-4">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <Link to='/home'>
                        <img style={{ width: "160px" }} src={logo} alt="Logo" />
                    </Link>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 ms-0 text-center">
                    <div>
                        {
                            cart.length > 0 ? <Link to="/checkout">
                                <button type="button" className="btn position-relative">
                                    <i className="fas fa-shopping-cart"></i>
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        {cart.length}
                                        <span className="visually-hidden">unread messages</span>
                                    </span>
                                </button>
                            </Link> :
                                <button disabled type="button" className="btn position-relative">
                                    <i className="fas fa-shopping-cart"></i>
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        {cart.length}
                                        <span className="visually-hidden">unread messages</span>
                                    </span>
                                </button>
                        }
                        <Link to="/signup">
                            <button className="btn btn-danger mx-4">Sign Up</button>
                        </Link>
                        {
                            user.email ? <button onClick={logOut} className="btn btn-primary mx-2">Sign Out</button> : <Link to="/signin">
                                <button className="btn btn-primary mx-2">Sign In</button>
                            </Link>
                        }
                        {
                            user?.email && user?.photoURL ? <img width="50px" className="rounded-circle ms-3" src={user.photoURL} alt="" /> : <span className="displayName">{user.displayName}</span>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;