import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../image/topImg.svg'
import './Banner.css'


const Banner = () => {
    return (
        <div className='banner row row-cols-lg-2 row-cols-md-2 row-cols-sm-1 mt-4'>
            <div>
                <img className='img-fluid' src={img} alt="" />
            </div>
            <div className='banner-details'>
                <h3><span className='logo'>Quize Ahead</span> is a top leading quize <br />
                    sites in the world <span className='logo'>!!!</span> </h3>
                <p>You can create a question in a quiz that does not include answers or point values. A text no question quiz question can be used as a preface to a quiz or a group of questions within a quiz.</p>
                <Link className='learn-more-btn'>Learn More</Link>
            </div>
        </div>
    );
};

export default Banner;