import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../contexts/useAuth';
import useFood from '../../hooks/useFood';
import SingleFood from '../SingleFood/SingleFood';
import './Foods.css';

const Foods = () => {
    const { foods, setFoods } = useFood();

    const { carts } = useAuth();
    const [cart, setCart] = carts;

    const [selectedFoods, setSelectedFoods] = useState([]);


    useEffect(() => {
        const allFoods = [...foods];
        setSelectedFoods(allFoods);
    }, [foods])

    const handleBreakfast = () => {
        const allBreakfast = foods.filter(food => food.type === 'breakfast');
        setSelectedFoods(allBreakfast);
    }

    const handleLunch = () => {
        const allLunch = foods.filter(food => food.type === 'lunch');
        setSelectedFoods(allLunch);
    }

    const handleDinner = () => {
        const allDinner = foods.filter(food => food.type === 'dinner');
        setSelectedFoods(allDinner);
    }

    // console.log(foods);

    return (
        <div className="container">
            <h2 className="text-center mt-4">Our Foods</h2>
            <div className="mb-5 text-center">
                <button onClick={handleBreakfast} className="btn me-3 text-danger fs-5 fw-bold">Breakfast</button>
                <button onClick={handleLunch} className="btn me-3 text-danger fs-5 fw-bold">Lunch</button>
                <button onClick={handleDinner} className="btn me-3 text-danger fs-5 fw-bold">Dinner</button>
            </div>
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-5">
                {
                    selectedFoods?.map(food => <SingleFood key={food.id} food={food} />)
                }
            </div>
            <div className="mt-4 mb-5 text-center">
                {
                    cart.length > 0 ? <Link to='/checkout'>
                        <button className="btn btn-success btn-lg">Checkout Order</button>
                    </Link> : <button disabled className="btn btn-success btn-lg">Checkout Order</button>
                }
            </div>
        </div>
    );
};

export default Foods;