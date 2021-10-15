import React from 'react';
import './Checkout.css';
import useAuth from '../../contexts/useAuth';
import CartItem from '../CartItem/CartItem';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useState } from 'react/cjs/react.development';
import { useHistory } from 'react-router';

const Checkout = () => {

    const { carts } = useAuth();
    const [cart, setCart] = carts;

    const [userName, setUserName] = useState('');
    const [userHouse, setUserHouse] = useState('');
    const [userCountry, setUserCountry] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [success, setSuccess] = useState(false);
    const { delivery } = useAuth();
    const [userInfo, setUserInfo] = delivery;

    const saveUserInfo = (e) => {
        e.preventDefault();
        setUserInfo({
            name: userName,
            house: userHouse,
            country: userCountry,
            phone: userPhone,
            save: true
        })
        setSuccess(true);
    }

    const history = useHistory();
    const placeOrder = () => {
        setCart([]);
        history.push('/placeorder');
    }

    // console.log(userInfo);

    let subtotal = 0;
    for (const item of cart) {
        subtotal += item.price * item.quantity;
    }

    let deliveryFee = 0;
    if (subtotal < 30 && subtotal > 0) {
        deliveryFee = 10;
    }
    else if (subtotal < 50 && subtotal > 30) {
        deliveryFee = 20;
    }

    let total = deliveryFee + subtotal;

    return (
        <div>
            <Header />
            <div className="container">
                <div className="row my-5">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h3>Edit your delivery Details</h3>
                        <hr style={{ border: "1px solid #000", width: "75%" }} />
                        <form onSubmit={saveUserInfo} className="form">
                            <input onBlur={(e) => setUserName(e.target.value)} type="text" placeholder="Name" required /><br /><br />
                            <input onBlur={(e) => setUserHouse(e.target.value)} type="text" placeholder="House or City" required /><br /><br />
                            <input onBlur={(e) => setUserCountry(e.target.value)} type="text" placeholder="Country" required /><br /><br />
                            <input onBlur={(e) => setUserPhone(e.target.value)} type="number" placeholder="Phone Number" required /><br /><br />
                            <button className="btn btn-danger w-75">Save & Continue</button>
                        </form>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 ps-4 mt-3">
                        <h6>From <span className="fw-bold">Red Onion Restaurant Gulshan, Dhaka.</span></h6>
                        <p>Arriving in 20 to 30 min</p>
                        {
                            cart?.map(item => <CartItem item={item} />)
                        }
                        <hr style={{ border: "1px solid #000" }} />
                        <div className="text-left d-flex justify-content-between w-100">
                            <h5>Sub Total: </h5>
                            <h5>$ {subtotal.toFixed(2)}</h5>
                        </div>
                        <div className="text-left d-flex justify-content-between w-100">
                            <h5>Delivery fee: </h5>
                            <h5>$ {deliveryFee.toFixed(2)}</h5>
                        </div>
                        <div className="text-left d-flex justify-content-between w-100">
                            <h5>Total: </h5>
                            <h5>$ {total.toFixed(2)}</h5>
                        </div>
                        {
                            success && <button onClick={placeOrder} className="btn btn-danger mt-2 py-2">Place Order</button>
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Checkout;