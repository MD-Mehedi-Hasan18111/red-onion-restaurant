import React from 'react';
import './About.css';
import about1 from '../../images/about1.png';
import about2 from '../../images/about2.png';
import about3 from '../../images/about3.png';

const About = () => {
    return (
        <div className="container mb-4">
            <h3 className="my-3">Why you choose us</h3>
            <p>Barton waited twenty always repair in within we do. An delighted offending<br /> curiosity my is dashwoods at. Boy prosperous increasing surrounded.</p>
            <div className="row row-cols-lg-3 row-cols-md-3 row-cols-sm-1">
                <div className="col">
                    <img className="w-100 mb-3" src={about1} alt="" />
                    <h5>Delivery Fast</h5>
                </div>
                <div className="col">
                    <img className="w-100 mb-3" src={about2} alt="" />
                    <h5>A good Auto Responder</h5>
                </div>
                <div className="col">
                    <img className="w-100 mb-3" src={about3} alt="" />
                    <h5>Home Delivery</h5>
                </div>
            </div>
        </div>
    );
};

export default About;