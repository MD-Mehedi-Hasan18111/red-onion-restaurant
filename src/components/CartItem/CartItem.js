import React from 'react';
import './CartItem.css';

const CartItem = (props) => {

    const { img, name, quantity, price } = props.item;

    return (
        <div className="cartItem d-flex align-items-center">
            <div>
                <img width="80px" className="rounded-circle" src={img} alt="" />
            </div>
            <div className="ms-5">
                <h6 className="m-0">{name}</h6>
                <small className="m-0">Quantity: {quantity}</small><br />
                <small className="text-danger">${price}</small>
            </div>
        </div>
    );
};

export default CartItem;