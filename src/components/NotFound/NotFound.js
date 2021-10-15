import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div className="text-center m-3">
                <img width="400px" src="https://png.pngtree.com/png-vector/20200609/ourlarge/pngtree-hand-drawn-business-computer-404-error-illustration-png-image_2220264.jpg" alt="" />
                <h1>Page not Found!</h1>
                <Link to="/home">
                    <button className="btn btn-danger">Back to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;