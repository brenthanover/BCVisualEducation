import React from 'react';
import '../style/CustomNavbar.css'
import { NavLink } from 'react-router-dom'

const CustomNavbar = () => {
    return (
        <div id="navbar">
            <p id="brent">brent hanover</p>
            <ul>
                <li><NavLink to="/Home">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/reviewpage">Reviews</NavLink></li>
                <li><NavLink to="/assignment">Assignment</NavLink></li>
            </ul>
        </div>
    );
}

export default CustomNavbar;