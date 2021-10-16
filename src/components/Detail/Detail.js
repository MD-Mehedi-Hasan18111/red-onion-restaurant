import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import useAuth from '../../contexts/useAuth';
import useCart from '../../hooks/useCart';
import useFood from '../../hooks/useFood';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Detail = () => {
    const { id } = useParams();

    const { carts } = useAuth();
    const [cart, setCart] = carts;

    const { foods, setFoods } = useFood();

    const [quantity, setQuantity] = useState(1);

    // console.log(foods);

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    }
    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    const detail = foods.find(food => food.id == id);

    const handleAddToCart = (item) => {
        item.quantity = quantity;
        const newCart = [...cart, item];
        setCart(newCart);
    }

    // console.log(cart);

    return (
        <div>
            <Header />
            <div className="container my-5">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h2>{detail?.name}</h2>
                        <h5>Category: {detail?.type}</h5>
                        <p>After 30 years in business, we still serve the best Chinese food in the Sydney area. Peking specializes in authentic Chinese cuisine. After 30 years in business, we still serve the best Chinese food in the Sydney area. Peking specializes in authentic Chinese cuisine. After 30 years in business, we still serve the best Chinese food in the Sydney area. Peking specializes in authentic Chinese cuisine.</p>
                        <h2>${detail?.price}</h2>
                        <button onClick={() => handleAddToCart(detail)} className="btn btn-danger btn-md">Add to Cart <i className="fas fa-cart-plus"></i></button>
                        <Link to="/">
                            <button className="btn btn-danger btn-md ms-4">Back</button>
                        </Link>
                        <div className="d-flex align-items-center mt-4">
                            <h4 className="me-4">Quantity:</h4>
                            <button onClick={handleDecrease} className="btn btn-lg me-3"><i className="fas fa-minus"></i></button>
                            <h5>{quantity}</h5>
                            <button onClick={handleIncrease} className="btn btn-lg ms-3"><i className="fas fa-plus"></i></button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <img width="70%" src={detail?.img} alt="" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Detail;