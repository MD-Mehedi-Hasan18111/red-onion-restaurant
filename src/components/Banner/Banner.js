import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <h1 className="text-center text-secondary">Best Food Waiting For Your Belly!</h1>
            <div className="input-group mb-3 w-50 mx-auto my-2">
                <input type="text" className="search form-control border border-danger border-2" placeholder="Search food..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button class="btn btn-danger" type="button" id="button-addon2"><i class="fas fa-search"></i></button>
            </div>
        </div>
    );
};

export default Banner;