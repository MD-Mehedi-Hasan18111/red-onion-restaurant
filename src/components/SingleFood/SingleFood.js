import React from 'react';
import { Link } from 'react-router-dom';
import './SingleFood.css';

const SingleFood = (props) => {

    const { id, name, type, img, description, price } = props.food;

    return (
        <div className="col">
            <div className="card shadow-sm border border-secondary rounded-3 p-4 h-100">
                <div className="text-center">
                    <img className="rounded-circle" height="150px" width="200px" src={img} alt="" />
                </div>
                <div className="card-body text-center">
                    <h5>{name}</h5>
                    <span>Category: {type}</span>
                    <p className="text-muted">{description}</p>
                    <h3>Price: ${price}</h3>
                </div>
                <div className="text-center d-block">
                    <Link to={`detail/${id}`}>
                        <button className="btn btn-danger w-100">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleFood;